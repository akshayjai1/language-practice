def check_prime(n):
	for divisor in range(2,int(n**0.5)+1):
		if n % divisor == 0:
			return False
	return True

class Iterative:
	def __init__(self, max):
		self.max = max
		self.number = 1

	def __iter__(self):
		return self

	def __next__(self):
		self.number+=1
		if self.number >= self.max:
			raise StopIteration
		elif check_prime(self.number):
			return self.number
		else:
			return self.__next__()

def PrimesGenerator(max):
	num = 1
	while num < max:
		num+=1
		if check_prime(num):
			yield num

s = PrimesGenerator(1e1)

# print('hello',s)
# for i in s:
# 	print('prime = ',i)

gprime = (i for i in range(2,int(1e1)) if check_prime(i))
# print('generator expression')
# for i in gprime:
# 	print('prime = ',i)

class Student:
	def __init__(self, name):
		self._name = name

class Student1(Student):
	def __init__(self,name):
		super.__init__(name)

sd = Student("saif")

print(sd._name)
