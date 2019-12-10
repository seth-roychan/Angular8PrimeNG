import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
              Label: '統計訊息', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
            },
            {
              Label: '銷售管理', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
            },
            {
              Label: '採購管理', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
            },
            {
              Label: '庫存管理', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
            },
            {
              Label: '結算賬目', Icon: 'fa-home', RouterLink: null, Childs: [
                { Label: '應收沖賬', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '應收賬分析', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '應付沖賬', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '應付賬分析', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '收據管理', RouterLink: null, Childs: null, IsChildVisible: false }
              ], IsChildVisible: false
            },
            {
              Label: '報表分析', Icon: 'fa-home', RouterLink: null, Childs: [
                { Label: '銷售分析', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '採購分析', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '庫存分析', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '盈利分析', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '客戶分析', RouterLink: null, Childs: null, IsChildVisible: false }
              ], IsChildVisible: false
            },
            {
              Label: '基本設定', Icon: 'fa-home', RouterLink: null, Childs: [
                { Label: '客戶設定', RouterLink: null, Childs: [
                  { Label: '客戶類別', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '客戶設定', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '付款方式', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '區域設定', RouterLink: null, Childs: null, IsChildVisible: false }
                  ], IsChildVisible: false
                },
                { Label: '供應商設定', Icon: 'fa-home', RouterLink: null, Childs: [
                  { Label: 'Menu Level', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '客戶設定', RouterLink: null, Childs: null, IsChildVisible: false }
                  ], IsChildVisible: false
                },
                { Label: '用戶設定', Icon: 'fa-cart-plus', RouterLink: null, Childs: [
                  { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: 'Menu Level 1.2', RouterLink: null, Childs: null, IsChildVisible: false }
                  ], IsChildVisible: false
                },
                { Label: '貨物設定', Icon: 'fa-cart-plus', RouterLink: null, Childs: [
                  { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: 'Menu Level 1.2', RouterLink: null, Childs: null, IsChildVisible: false }
                  ], IsChildVisible: false
                },
                { Label: '內容設定', Icon: 'fa-cart-plus', RouterLink: null , Childs: [
                  { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: 'Menu Level 1.2', RouterLink: null, Childs: null, IsChildVisible: false }
                  ], IsChildVisible:false
                },
              ], IsChildVisible: false
            },
            {
              Label: '進階功能', Icon: 'fa-users', RouterLink: '/main/employees', Childs: [
                { Label: 'Departments', Icon: 'fa-sitemap', RouterLink: '/main/departments', Childs: null, IsChildVisible: false },
                { Label: 'ContactUs', Icon: 'fa-envelope', RouterLink: '/main/contactus', Childs: null, IsChildVisible: false },
                { Label: 'Error 404', Icon: 'fa-exclamation-triangle', RouterLink: '/error', Childs: null, IsChildVisible: false }
              ], IsChildVisible: false
            },
            {
                Label: 'AboutUs', Icon: 'fa-info-circle', RouterLink: '/main/aboutus', Childs: null, IsChildVisible: false
            },
        ];
    }
}
