import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { ListItem, Avatar } from 'react-native-elements'

export default function Reportes(props) {
    const { navigation } = props;

    const Africa = {
        index: 0,
        name: 'Africa',
        avatar_url: 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_belgian-shepherd-dog-malinois_desktop.jpg?h=475&la=en&w=825&hash=4453F39A31F8404DF998D772EDA8D5AA',
        subtitle: 'Perdida',
        date: '12 de noviembre de 2020',

        tipoReporteID: 1,
        EspecieID: 1,
        TamanoID: 3,
        ColorID: 1,
        Dir: 'Bahia de ohuira #666 colonia morelos',
        Descripcion: 'Se escapo cerca de la papeleria',

    }

    const Ringo = {
        index: 1,
        name: 'Perro feo de la esquina',
        avatar_url: 'https://instagram.fcul2-1.fna.fbcdn.net/v/t51.2885-15/e35/47691534_1981288845508250_3304396044808224768_n.jpg?_nc_ht=instagram.fcul2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=C5kRCFH8rcoAX-w93ys&tp=18&oh=1cb784d003c63617ce70cf0e263a4e2f&oe=5FDF16F7',
        subtitle: 'Visto',
        date: '28 de marzo de 2020',

        tipoReporteID: 2,
        EspecieID: 1,
        TamanoID: 2,
        ColorID: 4,
        Dir: 'Puerto de ringo #333 colonia nvo culiacan',
        Descripcion: 'Lo vi cerca de la casa de una vecina, me parece que le esta dando comida y agua',

    }


    const [mascotas, setMascotas] = useState([Africa, Ringo]);

    const setAnimales = (nuevaMascota) => {
        const copia = [...mascotas]
        if (nuevaMascota.index >= 0) {
            console.log("index");
            copia[nuevaMascota.index] = nuevaMascota;

        }
        else {
            console.log("NO index");
            nuevaMascota.date = "19 de noviembre del 2020"
            nuevaMascota.index = copia.length;
            copia.push(nuevaMascota);
        }
        setMascotas([...copia]);
    }

    useEffect(() => {
        console.log("useeffect");
        return () => {
        }
    })

    return (
        <>
            <ScrollView style={styles.viewBody}>
                {
                    mascotas.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <Avatar source={{ uri: l.avatar_url }} />
                            <ListItem.Content>
                                <ListItem.Title><span style={{ fontWeight: "500" }}>{l.name}</span></ListItem.Title>
                                <ListItem.Subtitle>{l.tipoReporteID === 1 ? "Perdido" : "Visto"}</ListItem.Subtitle>
                                <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
                            </ListItem.Content>
                            <Avatar onPress={() => navigation.navigate("nuevo_reporte"
                                , { mascota: l, setAnimales }
                            )}
                                source={{
                                    uri:
                                        'http://www.myiconfinder.com/uploads/iconsets/256-256-4aff514fe3d4cdea16cedd424851d5f7-arrow.png'
                                }}
                            />


                        </ListItem>
                    ))
                }


            </ScrollView>
            <TouchableOpacity>
                <Icon
                    reverse
                    type="material-community"
                    name="plus"
                    color="#EDB506"
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("nuevo_reporte"
                        , { setAnimales }
                    )}
                />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#fff",
    },
    btnContainer: {
        position: "absolute",
        bottom: 10,
        right: 25,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,

    },
})