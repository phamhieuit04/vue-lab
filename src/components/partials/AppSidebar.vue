<script setup lang="ts">
import { House, Info, MessageCircleMore } from 'lucide-vue-next';

const route = useRoute();

const items = [
    {
        title: "Home",
        path: '/',
        icon: House,
    },
    {
        title: "Messages",
        path: '/messages',
        icon: MessageCircleMore,
    },
    {
        title: "About",
        path: '/about',
        icon: Info,
    },
]
</script>

<template>
    <Sidebar collapsible="icon">
        <SidebarContent class="pt-2.5">
            <SidebarGroup>
                <SidebarGroupLabel>Vue lab</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in items">
                            <SidebarMenuButton as-child :is-active="item.path == route.path">
                                <RouterLink :to="item.path">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                </RouterLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
</template>