from queue import Empty


class ArrayQueue:

    DEFAULT_CAPACITY = 10

    def __init__(self):
        self._data = []*ArrayQueue.DEFAULT_CAPACITY
        self._size = 0
        self._front = 0
    def __len__(self):
        return self._size
    def is_empty(self):
        return self._size == 0
    def front(self):
        if self.is_empty():
            raise Empty('Queue is Empty')
        return self._data[self._front]
    def Dequeue(self):
        if self.is_empty():
            raise Empty('Queue is Empty')
        answer = self._data[self._front]
        self._data[self._front] = None
        self._front = (self._front+1)%self._size
        self._size -= 1
        return answer




    
    
