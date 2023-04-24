const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },

  {
    path: "/meeting/:id",
    name: "meeting",
    component: () => import("pages/Meeting.vue"),
    // children: [
    //   { path: '', component: () => import('pages/Meeting.vue') }
    // ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
