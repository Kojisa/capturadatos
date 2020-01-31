import React,{Component} from 'react';
import {TextField,Select,MenuItem,FormControl,FormControlLabel,
    Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
    




export default class Formulario2 extends Component{

    constructor(props){
        super(props);
        this.state={
            profesionales:[],
            profesional:'',
            establecimientos:[],
            establecimiento:'',
            codigobase:'',
            partido:'',
            codigo:'',
            regionsanitaria:'',
            servicio:'',
            servicios:[],
            fecha:'',
            horario:'',
            atenciones:[],
            servicio:'',
            servicios:[],
            etapa:0,
        }
    }

    actualizarVariables(variable,valor){
        this.setState({
            [variable]:valor
        })
    }


    render(){

        let muestra = null;
        if(this.state.etapa === 0){
            muestra = <IngresoInicial
                establecimiento={this.state.establecimiento}
                establecimientos={this.state.establecimientos}
                profesional={this.state.profesional}
                profesionales={this.state.profesionales}
                servicio={this.state.servicio}
                servicios={this.state.servicios}
                funAct={this.actualizarVariables.bind(this)}
            />
        }
        return(
            <div>
               {muestra}
            </div>
        )
    }
}

class Atenciones extends Component{
    constructor(props){
        super(props);
        this.state={
            atenciones:props.atenciones,

        }
    }

    componentWillReceiveProps(props){
        this.setState({
            atenciones:props.atenciones,
        })
    }

    render(){
        return <div>
            
        </div>
    }
}




class IngresoInicial extends Component{
    constructor(props){
        super(props);
        this.state={
            establecimientos:props.establecimientos,
            establecimiento:props.establecimiento,
            profesionales:props.profesionales,
            profesional:props.profesional,
            servicio:props.servicio,
            servicios:props.servicios,
        }

        this.actPadre = props.funAct;
    }

    componentWillReceiveProps(props){
        this.setState({
            establecimientos:props.establecimientos,
            establecimiento:props.establecimiento,
            profesionales:props.profesionales,
            profesional:props.profesional,
            servicio:props.servicio,
            servicios:props.servicios,
        })
    }


    render(){
        return(
            <div>
                 <AutoComplete
                    options={this.state.profesionales}
                    getOptionLabel={pro=>pro.nombre + ' ' +pro.apellido}
                    style={{width:'80wv'}}
                    value={this.state.profesional}
                    onChange={(ev,val)=>this.actPadre('profesional',val)}
                    renderInput={
                        params=>{
                            <TextField 
                                {...params}
                                label='Profesional'
                                variant='outlined'
                                fullWidth
                            />
                        }
                    }
                />

                <AutoComplete
                    options={this.state.establecimientos}
                    getOptionLabel={est=>est.denominacion }
                    style={{width:'80wv'}}
                    value={this.state.establecimiento}
                    onChange={(ev,val)=>this.actPadre('establecimiento',val)}
                    renderInput={
                        params=>{
                            <TextField 
                                {...params}
                                label='Establecimiento'
                                variant='outlined'
                                fullWidth
                            />
                        }
                    }
                /> 
                <AutoComplete
                    options={this.state.establecimientos}
                    getOptionLabel={est=>est.codigobase}
                    style={{width:'80wv'}}
                    value={this.state.establecimiento}
                    onChange={(ev,val)=>this.actPadre('establecimiento',val)}
                    renderInput={
                        params=>{
                            <TextField 
                                {...params}
                                label='Codigo de Base'
                                variant='outlined'
                                fullWidth
                            />
                        }
                    }
                />
                <AutoComplete
                    options={this.state.establecimientos}
                    getOptionLabel={est=>est.partido}
                    style={{width:'80wv'}}
                    value={this.state.establecimiento}
                    onChange={(ev,val)=>this.actPadre('establecimiento',val)}
                    renderInput={
                        params=>{
                            <TextField 
                                {...params}
                                label='Partido'
                                variant='outlined'
                                fullWidth
                            />
                        }
                    }
                /> 
                <AutoComplete
                    options={this.state.establecimientos}
                    getOptionLabel={est=>est.codigo}
                    style={{width:'80wv'}}
                    value={this.state.establecimiento}
                    onChange={(ev,val)=>this.actPadre('establecimiento',val)}
                    renderInput={
                        params=>{
                            <TextField 
                                {...params}
                                label='Codigo'
                                variant='outlined'
                                fullWidth
                            />
                        }
                    }
                />
                <AutoComplete
                    options={this.state.establecimientos}
                    getOptionLabel={est=>est.regionsanitaria}
                    style={{width:'80wv'}}
                    value={this.state.establecimiento}
                    onChange={(ev,val)=>this.actPadre('establecimiento',val)}
                    renderInput={
                        params=>{
                            <TextField 
                                {...params}
                                label='Codigo'
                                variant='outlined'
                                fullWidth
                            />
                        }
                    }
                />
                <AutoComplete
                    options={this.state.servicios}
                    getOptionLabel={ser=>serv.nombre}
                    style={{width:'80wv'}}
                    value={this.state.servicio}
                    onChange={(ev,val)=>this.actPadre('servicio',val)}
                    renderInput={
                        params=>{
                            <TextField 
                                {...params}
                                label='Codigo'
                                variant='outlined'
                                fullWidth
                            />
                        }
                    }
                />
            </div>
        )
    }
}