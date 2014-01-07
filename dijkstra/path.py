from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
from dijkstra import *

graph = None

def getPath(request):
	global graph
	dic = request.matchdict
	start = dic["start"]
	end = dic["end"]
	path = graph.dijkstra(start, end)

	if path != [] and path != None:
		return Response(json.dumps(path))
	else:
		return Response(json.dumps(["error"]))


def createGraph():
	global graph
	nodeList = []

	node = Node("A", [Edge("A", "B", 100), Edge("A", "C", 80)], (9, 3))
	nodeList.append(node)

	node = Node("B", [Edge("B", "A", 100), Edge("B", "C", 30), Edge("B", "D", 50)], (5, 8))
	nodeList.append(node)

	node = Node("C", [Edge("C", "A", 80), Edge("C", "B", 30), Edge("C", "E", 40)], (8, 8))
	nodeList.append(node)

	node = Node("D", [Edge("D", "B", 50), Edge("D", "E", 20), Edge("D", "F", 60)], (6, 13))
	nodeList.append(node)

	node = Node("E", [Edge("E", "C", 40), Edge("E", "D", 20), Edge("E", "G", 60)], (8, 13))
	nodeList.append(node)

	node = Node("F", [Edge("F", "J", 10), Edge("F", "D", 60), Edge("F", "G", 20), Edge("F", "H", 70)], (5, 18))
	nodeList.append(node)

	node = Node("G", [Edge("G", "E", 60), Edge("G", "F", 20), Edge("G", "I", 70)], (8, 18))
	nodeList.append(node)

	node = Node("H", [Edge("H", "K", 10), Edge("H", "F", 70), Edge("H", "I", 10)], (5, 24))
	nodeList.append(node)

	node = Node("I", [Edge("I", "G", 70), Edge("I", "H", 10), Edge("I", "L", 10)], (8, 24))
	nodeList.append(node)

	node = Node("J", [Edge("J", "F", 10), Edge("J", "K", 70)], (3, 18))
	nodeList.append(node)

	node = Node("K", [Edge("K", "J", 70), Edge("K", "H", 10)], (3, 24))
	nodeList.append(node)

	node = Node("L", [Edge("A", "B", 100)], (10, 25))
	nodeList.append(node)

	graph = Graph(nodeList)


if __name__ == '__main__':
	createGraph()

	config = Configurator()
	config.add_route('path', '/path/start={start}&end={end}')
	config.add_view(getPath, route_name='path')
	app = config.make_wsgi_app()
	server = make_server('0.0.0.0', 8000, app)
	server.serve_forever()