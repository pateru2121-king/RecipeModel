import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
 isAuthenticated = false;
 private userSub: Subscription;


  constructor(private dataStorage : DataStorageService,
              private authservice: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authservice.user.subscribe( user =>{
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveDta(){
      this.dataStorage.storeRecipes();
  }
  onFetchData(){
    this.dataStorage.fetchRecipes().subscribe();
  }
  onLogout(){
    this.authservice.logout();
  }
  ngOnDestroy(){
      this.userSub.unsubscribe();
  }

}
