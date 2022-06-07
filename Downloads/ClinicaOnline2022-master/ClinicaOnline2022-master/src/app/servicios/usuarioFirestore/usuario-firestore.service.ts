import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioFirestoreService {
  private usuariosRef: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.usuariosRef = this.db.collection('usuarios');
  }

  public crearUsuario(usuario: Usuario) {
    return this.usuariosRef.add({ ...usuario });
  }

  public obtenerUsuario() {
    return this.usuariosRef.valueChanges() as Observable<Usuario[]>;
  }

  public update(id: string, data: any) {
    return this.usuariosRef.doc(id).update(data);
  }

  public delete(id: string) {
    return this.usuariosRef.doc(id).delete();
  }

  // public obtenerColeccionIngresos() {
  //   return this.userRef.snapshotChanges().pipe(
  //     map(actions => actions.map((a: any) => {
  //       const data = a.payload.doc.data() as Usuario;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     })));
  // }

  // public cambiarValidado(uid: string, validado: boolean) {
  //   if (validado == true) {
  //     return this.userRef.doc(uid).update({
  //       validado: false
  //     });
  //   } else {
  //     return this.userRef.doc(uid).update({
  //       validado: true
  //     });
  //   }
  // }

  // public obtenerSnapshot() {
  //   return this.usuariosRef.snapshotChanges();
  // }
}
