from KekikSpatula import UcuzUcak
import json 


ucak = UcuzUcak()



for bilet in ucak.nesne:
 print(ucak.gorsel())



file = open('sample.json','w')		
file.write(ucak.gorsel())