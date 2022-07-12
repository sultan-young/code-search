
import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
export class RouteStrategyService implements RouteReuseStrategy {
  public static handlers: { [key: string]: DetachedRouteHandle } = {};
  public static deleteRouteSnapshot(path: string): void {
    const name = path.replace(/\//g, '_');
    if (RouteStrategyService.handlers[name]) {
      delete RouteStrategyService.handlers[name];
    }
  }
  /**
   * 判断当前路由是否需要缓存
   * 这个方法返回false时则路由发生变化并且其余方法会被调用
   * @param {ActivatedRouteSnapshot} future
   * @param {ActivatedRouteSnapshot} curr
   * @returns {boolean}
   * @memberof CacheRouteReuseStrategy
   */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig
      && JSON.stringify(future.params) === JSON.stringify(curr.params);
  }
  /**
   * 当离开当前路由时这个方法会被调用
   * 如果返回 true 则 store 方法会被调用
   * @param {ActivatedRouteSnapshot} route
   * @returns {boolean}
   * @memberof CacheRouteReuseStrategy
   */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
      return true;
  }
  /**
   * 将路由写入缓存
   * 在这里具体实现如何缓存 RouteHandle
   * 提供了我们离开的路由和 RouteHandle
   * @param {ActivatedRouteSnapshot} route
   * @param {DetachedRouteHandle} detachedTree
   * @memberof CacheRouteReuseStrategy
   */
  public store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
      RouteStrategyService.handlers[this.getPath(route)] = detachedTree;
  }
  /**
   * 
   * NOTE: 路由被导航 如果此方法返回 true（此时说明当前路由被缓存过） 则触发 retrieve 方法
   * 如果返回 false 这个组件将会被重新创建
   * @param {ActivatedRouteSnapshot} route
   * @returns {boolean}
   * @memberof CacheRouteReuseStrategy
   */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
      return !!RouteStrategyService.handlers[this.getPath(route)];
  }
  /**
   * 从缓存读取cached route
   * 提供当前路由的参数（刚打开的路由），并且返回一个缓存的 RouteHandle
   * 可以使用这个方法手动获取任何已被缓存的 RouteHandle
   * @param {ActivatedRouteSnapshot} route
   * @returns {(DetachedRouteHandle | null)}
   * @memberof CacheRouteReuseStrategy
   */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
      return RouteStrategyService.handlers[this.getPath(route)] || null;
  }
  private getPath(route: ActivatedRouteSnapshot): string {
    // tslint:disable-next-line: no-string-literal
    const path = (route as any)['_routerState'].url.replace(/\//g, '_');
    return path;
  }
}