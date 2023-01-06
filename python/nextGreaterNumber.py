def nextGreater(S):
				i = len(S) - 2
# step 1 find index, where number is falling after starting from end.
				while i > -1:
						if S[i] < S[i+1]:
								break;
						i-=1
# step 2: if there is no number where the number is falling, return -1, it is the highest number with given set of integers
				if i == -1:
						return -1
# step 3: find a number greater than s[i], which can swap s[i], however this number should be smallest among other numbers after s[i], which are greater than s[i]
				m = [ch for ch in S]
				smallest = m[i]
				greater = m[i+1]
				swapIndex = i+1
				for o in range(i,len(S)):
					if m[o] > smallest and m[o] <= greater:
						greater = m[o]
						swapIndex = o
				print(f"greater is {greater} and index is {swapIndex}")
				# print(a)
				m[i],m[swapIndex] = m[swapIndex],m[i]
				# print(m)
# step 4:after swaping sort the remaining numbers  i+1 onwards, to have minimum of the number
				b = m[i+1:]
				# print(b)
				b.sort()
				print('after sort')
				# print(b)
				d=m[:i+1]+b
				return ''.join(d)
print(nextGreater1('32610'))