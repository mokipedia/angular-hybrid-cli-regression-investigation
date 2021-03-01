import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreBootService {
  public apiInfo: Record<string, unknown>;

  getApiInfo(): Promise<Record<string, unknown>> {
    const promise = new Promise<Record<string, unknown>>((resolve, reject) => {
      const xHttp: XMLHttpRequest = new XMLHttpRequest();
      xHttp.onreadystatechange = function (response: any): void {
        if (this.readyState === 4 && this.status === 200) {
          resolve(Object.assign({}, JSON.parse(response.target.responseText)));
        }
      };
      xHttp.onerror = (response: any) => {
        reject(response);
      };
      xHttp.open('GET', './config.json', true);
      xHttp.send();
    });
    promise.then((apiInfo: Record<string, unknown>) => {
      (apiInfo as any).$get = () => apiInfo;
      this.apiInfo = apiInfo;
    });

    return promise;
  }
}
