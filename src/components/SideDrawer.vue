<template>
    <div class="drawer">
        <input id="side-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <slot></slot>
        </div>
        <div class="drawer-side">
            <label for="side-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    </div>
</template>
