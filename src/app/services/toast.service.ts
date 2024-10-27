import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {}


  showSuccess(message) {
    // this.toastr.success(message);
    this.toastr.success(message, 'Sucesso', {
      timeOut: 5000, // Tempo em milissegundos (5 segundos)
      progressBar: true, // Mostrar barra de progresso
      closeButton: true // Mostrar botão de fechar
    });
  }
}
