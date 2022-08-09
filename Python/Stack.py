from queue import Empty


class ArrayStack:

    def __init__(self):
        self._data = []
    
    def __len__(self):
        return len(self._data)
    
    def is_empty(self):
        return len(self._data) == 0
    
    def push(self,e):
        self._data.append(e)
    
    def top(self):
        if self.is_empty():
            raise Empty('Stack is Empty')
        return self._data[-1]
    
    def pop(self):
        if self.is_empty():
            raise Empty('Stack is Empty')
        return self._data.pop()

def reverseFile(fileName):
    S = ArrayStack()
    fileRead = open(fileName)
    for line in fileRead:
        S.push(line.rstrip('\n'))
    fileRead.close()

    fileWrite = open(fileName, 'w')
    while not S.is_empty():
        fileWrite.write(S.pop()+'\n')
    fileWrite.close()




if __name__ == "__main__":
    # S = ArrayStack()
    # print("Enter the Values into Stack")
    # for i in range(10):
    #     x=input()
    #     S.push(x)

    # print("Now poping the Array")
    # for i in range(10):
    #     print(S.pop())

    # reverse the contents of a file
    reverseFile('./Stack.txt')
