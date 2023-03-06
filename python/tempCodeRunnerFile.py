t = ceil(passenger/seats)
        # print(f" t = {t}")
      if parent != -1:
        res+=int(t)
        print(f"child = {child}  makes total passenger = {passenger} and result to increase by {t} -> {res}")
      