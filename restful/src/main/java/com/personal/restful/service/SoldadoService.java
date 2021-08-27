package com.personal.restful.service;

import com.personal.restful.controller.request.SoldadoEditRequest;
import com.personal.restful.dto.Soldado;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class SoldadoService {
    public Soldado buscarSoldado(String registro){
        Soldado soldado = new Soldado();
        soldado.setRegistro(registro);
        soldado.setNome("Alan");
        soldado.setRaca("Humano");
        soldado.setArma("Espada");
        return soldado;
    }

    public void criarSoldado(Soldado soldado){

    }

    public void editarSoldado(String registro, SoldadoEditRequest soldadoEditRequest) {
    }

    public void deletarSoldado(String registro) {
    }

    public List<Soldado> buscarSoldados() {
        Soldado soldado1 = new Soldado();
        soldado1.setRegistro("122");
        soldado1.setNome("Alan");
        soldado1.setRaca("Humano");
        soldado1.setArma("Granada");

        Soldado soldado2 = new Soldado();
        soldado2.setRegistro("157");
        soldado2.setNome("Lian");
        soldado2.setRaca("Draco");
        soldado2.setArma("Espada");

        return Arrays.asList(soldado1,soldado2);
    }
}
