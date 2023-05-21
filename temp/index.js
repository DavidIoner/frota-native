import React,{useState,useEffect} from 'react';
import config from "config/config.json";
import {Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {css} from "assets/css/Css";

export default function VehicleRegistration({navigation}) {

    const [Marca,setBrand]=useState(null);
    const [Modelo,setModel]=useState(null);
    const [Placa,setLicensePlate]=useState(null);
    const [Ano,setYear]=useState(null);

    //Envia os dados do formulário para o backend
    async function registerUser()
    {
        let reqs = await fetch(config.urlRootNode+'vehicle/register',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            // Json a ser postado
            body: JSON.stringify({
                Marca: Marca,
                Modelo: Modelo,
                Placa: Placa,
                Ano: Ano,
            })
        });
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={css.container}>

                <View style={css.header}>
                    <Image style={css.header__img} source={require('../assets/img/logo.png')} />
                </View>

                <View style={css.footer}>
                    <TextInput
                            style={css.input}
                            placeholder="Marca"
                            onChangeText={(text)=>setBrand(text)}
                    />
                    <TextInput
                            style={css.input}
                            placeholder="Modelo"
                            onChangeText={(text)=>setModel(text)}
                    />

                    <TextInput
                            style={css.input}
                            placeholder="Placa"
                            onChangeText={(text)=>setLicensePlate(text)}
                    />

                    <TextInput
                            style={css.input}
                            placeholder="Ano"
                            secureTextEntry={true}
                            onChangeText={(text)=>setYear(text)}
                    />

                    <TouchableOpacity style={css.button} onPress={registerUser}>
                        <Text style={css.button__text}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}