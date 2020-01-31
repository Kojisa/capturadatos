#coding=latin
def buscarDatos():
    
    arch = open('./datospersona.csv','r')
    
    import csv as CSV

    csv = CSV.reader(arch,delimiter=',')


    salida =[]
    for legajo in csv:

        salida.append( {
            '0':legajo[0],
            '1':legajo[1],
            '17':legajo[2],
            '18':legajo[3],
            '19':legajo[4],
            '20':legajo[5],
            '22':legajo[6],
            '23':legajo[7],
            '24':legajo[8],
            '25':legajo[9],
            '26':legajo[10]
        })

    return salida


def escribirDatos():

    datos = buscarDatos()

    
    from xlwt import Workbook
    
    libro = Workbook()
    hoja = libro.add_sheet('hoja1')
    

    for x in range(len(datos)):
        legajo = datos[x]

        for key in legajo:
            hoja.write(x,int(key),legajo[key].decode('utf-8').strip())

    libro.save('libroAct.xls')
        

escribirDatos()