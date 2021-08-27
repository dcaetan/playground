package com.personal.restful.controller;

import com.personal.restful.controller.request.SoldadoEditRequest;
import com.personal.restful.dto.Soldado;
import com.personal.restful.service.SoldadoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/soldado")
public class SoldadoController {

    public SoldadoService soldadoService;

    public SoldadoController(SoldadoService soldadoService) {
        this.soldadoService = soldadoService;
    }

    @GetMapping("/{registro}")
    public ResponseEntity<Soldado> buscarSoldado(@PathVariable() String registro) {
        Soldado soldado = soldadoService.buscarSoldado(registro);
        return ResponseEntity.status(HttpStatus.OK).body(soldado);
    }

    @GetMapping
    public ResponseEntity<List<Soldado>> buscarSoldados() {
        List<Soldado> soldados = soldadoService.buscarSoldados();
        return ResponseEntity.status(HttpStatus.OK).body(soldados);
    }

    @PostMapping
    public ResponseEntity criarSoldado(@RequestBody Soldado soldado) {
        soldadoService.criarSoldado(soldado);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{registro}")
    public ResponseEntity editarSoldado(@PathVariable() String registro, @RequestBody SoldadoEditRequest soldadoEditRequest) {
        soldadoService.editarSoldado(registro, soldadoEditRequest);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{registro}")
    public ResponseEntity deletarSoldado(@PathVariable() String registro) {
        soldadoService.deletarSoldado(registro);
        return ResponseEntity.ok().build();
    }
}
