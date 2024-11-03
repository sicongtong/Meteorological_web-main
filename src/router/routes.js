import AppLayout from "@/layout/AppLayout.vue";

const MenuRoutes = {
    path: "/",
    name: "applayout",
    component: AppLayout,
    children: [
        {
            path: "/",
            name: "main",
            component: () => import("@/views/MainView.vue"),
            meta: { title: "气象实况", icon: "House" },
        },
        {
            path: "/Meteorological_warning",
            name: "Meteorological_warning",
            component: () => import("@/views/Meteorological_warning.vue"),
            meta: { title: "气象预警", icon: "Menu" },
        },
        {
            path: "/Meteorological_analysis",
            name: "Meteorological_analysis",
            component: () => import("@/views/Meteorological_analysis.vue"),
            meta: { title: "气象分析", icon: "Meteorological_analysis" },
        },
        // {
        //     path: "/user",
        //     name: "user",
        //     component: () => import("@/views/RegisterView.vue"),
        //     meta: { title: "用户管理", icon: "User" },
        // },
    ],
};
export default MenuRoutes;
