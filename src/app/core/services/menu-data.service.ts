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
              Label: '庫存管理', Icon: 'fa-home', RouterLink: '/main/dashboard', IsChildVisible: false, Childs: [
                { Label: '庫存查詢', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '庫存盤點', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '期初存貨', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '採購點收', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '出倉單', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '調倉單', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '庫存調整', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false }
              ]
            },
            {
              Label: '結算賬目', Icon: 'fa-home', IsChildVisible: false, RouterLink: null, Childs: [
                { Label: '應收沖賬', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '應收賬分析', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '應付沖賬', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '應付賬分析', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '收據管理', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false }
              ]
            },
            {
              Label: '報表分析', Icon: 'fa-home', IsChildVisible: false, RouterLink: null, Childs: [
                { Label: '銷售分析', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '採購分析', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '庫存分析', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '盈利分析', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                { Label: '客戶分析', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false }
              ]
            },
            {
              Label: '基本設定', Icon: 'fa-home', IsChildVisible: false, RouterLink: null, Childs: [
                { Label: ' 客戶設定', Icon: 'fa-home', IsChildVisible: false, RouterLink: null, Childs: [
                  { Label: '客戶類別', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '客戶設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '付款方式', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '區域設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false }
                  ]
                },
                { Label: ' 供應商設定', Icon: 'fa-home', IsChildVisible: false, RouterLink: null, Childs: [
                  { Label: '供應商類別', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '供應商', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '付款方式', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false }
                  ]
                },
                { Label: '用戶設定', Icon: 'fa-cart-plus', IsChildVisible: false, RouterLink: null, Childs: [
                  { Label: '用戶', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '群組設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '部門設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false }
                  ]
                },
                { Label: '貨物設定', Icon: 'fa-cart-plus', IsChildVisible: false, RouterLink: null, Childs: [
                  { Label: '自訂分類一', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '自訂分類二', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '自訂分類三', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '貨物管理', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '單位設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '倉庫設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false }
                  ]
                },
                { Label: '內容設定', Icon: 'fa-cart-plus', IsChildVisible: false, RouterLink: null , Childs: [
                  { Label: '貨幣設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '沖賬方式', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '銀行設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false },
                  { Label: '賬戶設定', Icon: 'fa-home', RouterLink: null, Childs: null, IsChildVisible: false }
                  ]
                },
              ]
            },
            {
              Label: '進階功能', Icon: 'fa-users', IsChildVisible: false, RouterLink: '/main/employees', Childs: [
                { Label: '系統編號設定', Icon: 'fa-sitemap', RouterLink: '/main/departments', Childs: null, IsChildVisible: false },
                { Label: '屬性偏好設定', Icon: 'fa-envelope', RouterLink: '/main/contactus', Childs: null, IsChildVisible: false },
                { Label: '印表機設定', Icon: 'fa-exclamation-triangle', RouterLink: '/error', Childs: null, IsChildVisible: false },
                { Label: '操作記錄', Icon: 'fa-exclamation-triangle', RouterLink: '/error', Childs: null, IsChildVisible: false }
              ]
            },
            {
              Label: 'AboutUs', Icon: 'fa-info-circle', RouterLink: '/main/aboutus', Childs: null, IsChildVisible: false
            },
        ];
    }
}
