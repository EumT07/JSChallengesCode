""" 
Exercise number: 1 

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

"""
# def add(a,b):
#     print(a + b) 

# add(4,5)

"""
Exercise number: 2

// Write a function that takes a value as argument
// Return the type of the value

"""

# def typeOfValue(a):
#     print(type(a))

# typeOfValue(1)
# typeOfValue(1.2)
# typeOfValue(False)
# typeOfValue(None)
# typeOfValue({})
# typeOfValue("String")
# typeOfValue(["Hola","como"])

"""
Exercise number: 3

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
"""
# def iqualTo(a,b):
#     if a == b:
#         print(f"this values is {True}")
#     else:
#         print(f"This values is {False}") 

# iqualTo(2,3)
# iqualTo(3,3)
# iqualTo(1,"1")
# iqualTo("10","10")

"""
Exercise number: 4

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
"""

# def getLetter(a, n):
#     result = a[n-1]
#     print(result)

# getLetter("abcd",1)
# getLetter("zyxbwpl",5)
# getLetter("gfedcba",3)

"""
Exercise number: 5

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

"""

# def remove3LastNumber(a):
#     print(a[3:])

# remove3LastNumber("abcdefg")
# remove3LastNumber("1234")
# remove3LastNumber("fgedcba")


"""
Exercise number: 6

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

"""


# def taking_a_string(str):

#     print(str[-3:])

# taking_a_string('abcdefg')
# taking_a_string('1234')
# taking_a_string('fgedcba')


"""
Exercise number: 7

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
"""
# def first3Letter(a):
#     print(a[:3])

# first3Letter("abcdefg")
# first3Letter("1234")
# first3Letter("fgedcba")

"""
Exercise number: 8

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
"""

# def firstHalf(a):

#     lenOfa = int(len(a) / 2)
#     # print(lenOfa)
#     print(a[:lenOfa])

# firstHalf("abcdefgh")
# firstHalf("1234")
# firstHalf("gedcba")

"""
Exercise number: 9

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

"""

# def remove3Last_characters(a):

#     print(a[:-3])

#     # Par e Impar
#     # rst = ""
#     # if(len(a) % 2 == 0):
#     #     rst = (len(a) / 2) - 1
#     # else:
#     #     rst = (len(a)/2)
    
#     # rounder_value = round(rst)
#     # print(a[:rounder_value])


# remove3Last_characters("abcdefg")
# remove3Last_characters("1234")
# remove3Last_characters("fgedcba")

"""
Exercise number: 10

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
"""

# def porcent_of(a,b):
#     print(int(b / 100 * a))

# porcent_of(100,50)
# porcent_of(10,1)
# porcent_of(500,25)

"""
Exercise number: 11

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

"""

# def myFunction(a,b,c,d,e,f):

#     print( ((((a + b) - c) * d ) / e) ** f )

# myFunction(6,5,4,3,2,1)# 10.5
# myFunction(6,2,1,4,2,3)# 2744
# myFunction(2,3,6,4,2,3)# -8



"""
Exercise number: 12

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

"""

# def evenNumber(a):

#     if a % 2 == 0:
#         print(True)
#     else:
#         print(False)

# evenNumber(10)
# evenNumber(-4)
# evenNumber(5)
# evenNumber(-111)

"""
Exercise number: 13

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
"""

# def letter_in_string(a,b):

#     # print(b.count(a))
#     counter = 0 
#     for letter in b:
#         if a == letter:
#             counter += 1
#         else:
#             counter
#     print(counter)
    
    
# letter_in_string('o', 'hola o o o mundo') #2

# letra_en_la_cadena('m', 'how many times does the character occur in this sentence?')
# letra_en_la_cadena('h', 'how many times does the character occur in this sentence?')
# letra_en_la_cadena('?', 'how many times does the character occur in this sentence?')
# letra_en_la_cadena('z', 'how many times does the character occur in this sentence?')

"""
Exercise number: 14

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

"""

# import math


# def check_number_is_not_float(num):
#     # result = num - math.floor(num) == 0
#     result = isinstance(num,int)
    
    
#     # if(int(num) == num):
#     #     result = True
#     # else:
#     #     result = False


#     print(result)
#     # print(f"{int(num)} es igual a {num}")

# check_number_is_not_float(4)#True
# check_number_is_not_float(1.123)#False
# check_number_is_not_float(1048)#True
# check_number_is_not_float(10.48)#False


"""
Exercise number: 15

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

"""

# def smaller_than(a,b):
#     #Operador ternario
#     result = a / b if a < b else a * b

#     # if a < b:
#     #     result = a / b
#     # else:
#     #     result = a * b
    
#     print(result)

# smaller_than(10,100)#0.1
# smaller_than(90,45)#4050
# smaller_than(8,20)#0.4
# smaller_than(2,0.5)#1


"""
Exercise number: 16

Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
"""

# def string_in_another(a,b):
#     # result = a + b if a in b else b + a 

#     result = ""
#     # if(a.find(b) == -1):
#     #     result = a + b
#     # else:
#     #     result = b + a

#     print(result) 


# string_in_another("cheese","cake")
# string_in_another("lips","s")
# string_in_another("Java","script")
# string_in_another(" think, therefore I am", "I")



"""
Exercise number: 17

Round a number to 2 decimal places
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

"""

# def round_2_decimals(a):

#     result = round(a,2)
#     print(result)

# round_2_decimals(3.136)
# round_2_decimals(2.12397)
# round_2_decimals(1.12397)
# round_2_decimals(26.1379)


"""
Exercise number: 18

Split a number into its digits
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

"""

# def split_number(num):
#     slpNum = str(num) # Transfor a string
#     #Para poder aplicar los metodos de str
#     stringSeparated = (",").join(slpNum).split(",") 
#     result = []
#     for strNum in stringSeparated:
#         result.append(int(strNum))

#     print(result)

    
# split_number(10)#[1,0]
# split_number(931)#[9,3,1]
# split_number(193278)#[1,9,3,2,7,8]


"""
Exercise number: 19

Clear up the chaos behind these strings
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

"""

# def fixing_the_chaos(a,b):

#     def find_xcen(str):
#         return str.replace("%","")

#     stringA = find_xcen(a)
#     stringB = find_xcen(b)[::-1]
#     # turnStr = stringB[::-1]
#     strUnion = f"{stringA}{stringB}".capitalize()
    
#     print(strUnion)

# fixing_the_chaos("java","tpi%rcs")#"Javascript"
# fixing_the_chaos('c%ountry', 'edis')#"Javascript"
# fixing_the_chaos('down', 'nw%ot')#"Javascript"

