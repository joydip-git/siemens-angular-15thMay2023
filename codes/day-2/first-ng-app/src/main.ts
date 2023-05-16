import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { PlatformRef } from "@angular/core";
import { AppModule } from "./app/app.module";

const platformObj: PlatformRef = platformBrowserDynamic()
const p = platformObj.bootstrapModule(AppModule)
p.then(
  (res) => console.log(res),
  (err) => console.log(err)
)