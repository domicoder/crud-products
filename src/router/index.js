import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "home",
    component: resolve => {
      require(["../views/Home"], resolve);
    },
    children: [
      {
        path: "/",
        name: "homeoption",
        component: resolve => {
          require(["../views/ui/home/HomeOptions"], resolve);
        }
      },
      {
        path: "/category",
        name: "category",
        component: resolve => {
          require(["../views/ui/category/Categories"], resolve);
        }
      },
      {
        path: "/products",
        name: "products",
        component: resolve => {
          require(["../views/ui/products/Products"], resolve);
        }
      },
      {
        path: "/about",
        name: "about",
        component: resolve => {
          require(["../views/ui/about/About"], resolve);
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
