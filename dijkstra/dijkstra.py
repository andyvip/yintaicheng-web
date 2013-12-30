#!/usr/bin/python

class Edge(object):
    def __init__(self, start, end, weight):
        self.startNodeId = start
        self.endNodeId = end
        self.weight = weight


class Node(object):
    def __init__(self, nodeId, edgeList):
        self.nodeId = nodeId
        self.edgeList = edgeList

        
class Path(object):
    def __init__(self, curNodeId):
        self.visited = False
        self.weight = 8888
        self.curNodeId = curNodeId
        self.routeList = []


class Graph(object):
    def __init__(self, nodeList):
        self.nodeList = nodeList
        self.pathDic = {}

        
    def initPaths(self, originNodeId):
        self.pathDic = {}
        originNode = None
        for node in self.nodeList:
            if node.nodeId == originNodeId:
                originNode = node 
            self.pathDic[node.nodeId] = Path(node.nodeId)


        if originNode is None:
            print "originNode is none"
            return
        else:
            for edge in originNode.edgeList:
               path =  self.pathDic[edge.endNodeId]
               if path is None:
                    print "path is None"
                    return
               else:
                    path.weight = edge.weight
                    path.routeList.append(originNodeId)


        path = self.pathDic[originNodeId]     
        path.weight = 0
        path.visit = True
        path.routeList.append(originNodeId)


    def getMinPath(self, originNodeId):
        destNode = None
        weight = 8888
        for node in self.nodeList:
            path = self.pathDic[node.nodeId]
            if path.visited == False and path.weight < weight:
                weight = path.weight
                destNode = node
        return destNode


    def dijkstra(self, originNodeId, destNodeId):
        self.initPaths(originNodeId)
        curNode = self.getMinPath(originNodeId)
        while curNode is not None:
            curPath = self.pathDic[curNode.nodeId]
            curPath.visited = True

            for edge in curNode.edgeList:
                minPath = self.pathDic[edge.endNodeId]
                if minPath.weight > (curPath.weight + edge.weight):
                    minPath.weight = curPath.weight + edge.weight
                    minPath.routeList = curPath.routeList + [curNode.nodeId]

            curNode = self.getMinPath(originNodeId)

        route = self.pathDic[destNodeId].routeList
        if route == []:
            return route
        else:    
            return route + [destNodeId]           

        
