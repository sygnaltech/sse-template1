
/*
 * Site
 */

import { IModule, Page } from "@sygnal/sse";

// import gsap from 'gsap'; 
 

export class Site implements IModule {

  constructor() {
  }

  setup() {

    Page.loadEngineCSS("site.css"); 
   
  }

  exec() {

    // Put your site-level custom code here
    // it will have full access to the DOM 

  }

}
