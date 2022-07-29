
import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
export class RouteStrategyService implements RouteReuseStrategy {
  routesToCache: string[] = ["A", "B"];
  storedRouteHandles = new Map<string, DetachedRouteHandle>();
 
  // Decides if the route should be stored
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
     return this.routesToCache.indexOf((route?.routeConfig?.path as any)) > -1;
  }
 
  //Store the information for the route we're destructing
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
     this.storedRouteHandles.set((route?.routeConfig?.path as any), handle);
  }
 
 //Return true if we have a stored route object for the next route
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.storedRouteHandles.has((route?.routeConfig?.path as any));
  }
 
  //If we returned true in shouldAttach(), now return the actual route data for restoration
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null{
    return this.storedRouteHandles.get(route.routeConfig!.path!) || null;
  }
 
  //Reuse the route if we're going to and from the same route
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // this.currentMode = route.routeConfig?.path;
     return future.routeConfig === curr.routeConfig;
  }
 }