class Base:
	def __init__(self):
		self.a = 5

	def change(self):
		self.a = 10

class Derived(Base):
	def change(self):
		self.a = self.a + 1
		return self.a

def main():
	d = Derived()
	print('hi')
	print(d.change())

main()