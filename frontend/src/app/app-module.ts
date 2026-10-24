import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Tasks } from './pages/tasks/tasks';
import { AddTask } from './pages/add-task/add-task';
import { EditTask } from './pages/edit-task/edit-task';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Home, Tasks, AddTask, EditTask],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
 