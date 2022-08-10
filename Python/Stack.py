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


def balanceBrackets(string):
    S = ArrayStack()
    left='({['
    right=')}]'
    for bracket in string:
        if bracket in left:
            S.push(bracket)
        elif bracket in right:
            if S.is_empty():
                return False
            if left.index(S.pop()) != right.index(bracket):
                return False
    return S.is_empty()
        
def is_Matched_HTML(raw):
    S=ArrayStack()
    j = raw.find('<')
    while j!=-1:
        if not S.is_empty():
            print(S.top())
        k = raw.find('>',j+1)
        if k == -1:
            return False
        tag = raw[j+1:k]
        if not tag.startswith('/'):
            S.push(tag)
        else:
            if S.is_empty():
                return False
            if tag[1:] != S.pop():
                return False
        j = raw.find('<',k+1)
    return S.is_empty()




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
    html_fail_String = '<body><center><h1>The Little Boat </h1></center>'
    html_pass_String = '<body><center><h1>The Little Boat </h1></center></body>'

    reverseFile('./Stack.txt')
    print(balanceBrackets('(((()))){{{}}}}'))
    print(balanceBrackets('[(((()))){{{}}}]'))
    print(is_Matched_HTML(html_fail_String))
    print(is_Matched_HTML(html_pass_String))



