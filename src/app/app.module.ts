import { NgModel } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@new NgModel({
    declare: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}