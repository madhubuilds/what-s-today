# What's Today: Neubrutalism CSS Framework

This document outlines the complete custom utility-based CSS framework built for the "What's Today?" web app. It includes all core structural files and the advanced utilities needed for a production-grade social media platform.

## 1. Core Variables & Resets (`index.css`)
*   **Colors:** `--color-bg`, `--color-surface`, `--color-ink`, `--color-border`
*   **Brand Pops:** `--color-primary`, `--color-pink`, `--color-lavender`, `--color-mint`, `--color-blue`, `--color-orange`, `--color-yellow`
*   **Structure:** `--border-sm/md/lg`, `--shadow-sm/md/active`
*   **Theme:** Automatic Dark Mode toggle via `[data-theme="dark"]`.
*   **Resets:** Sets global `box-sizing`, responsive images, and base typography (Space Grotesk).

## 2. Theming (`color.css`)
*   **Backgrounds:** `.bg-main`, `.bg-surface`, `.bg-ink`, `.bg-primary`, `.bg-pink`, `.bg-lavender`, `.bg-mint`, `.bg-yellow`, `.bg-orange`, `.bg-blue`
*   **Text:** `.text-main`, `.text-inverted`, `.text-primary`, `.text-pink`, `.text-lavender`, `.text-blue`, `.text-orange`
*   **Borders:** `.border-main`, `.border-primary`, `.border-pink`, `.border-blue`

## 3. Layout & Sizing (`layout.css`)
*   **Width/Height:** `.w-100`, `.w-50`, `.w-auto`, `.h-screen`, `.min-h-screen`
*   **Max Widths:** `.max-w-md` (Locks the main feed to 768px for desktop centering)
*   **Media:** `.object-cover`, `.object-contain`, `.object-fill`
*   **Overflow:** `.overflow-hidden`, `.overflow-x-auto`, `.overflow-y-auto`

## 4. Spacing System (`spacing.css`)
*   **Scale (4px base):** 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 7=32px, 8=48px
*   **Padding:** `.p-3` (all), `.px-4` (horizontal), `.py-2` (vertical), `.pt-1` (top)
*   **Margin:** `.m-2`, `.mt-4`, `.mx-auto` (horizontal centering)
*   **Gap:** `.gap-1` to `.gap-8`

## 5. Flexbox Alignment (`flex.css`)
*   **Display:** `.d-flex`, `.d-inline-flex`, `.flex-col`, `.flex-row`
*   **Main Axis:** `.justify-between`, `.justify-center`, `.justify-start`, `.justify-around`
*   **Cross Axis:** `.align-center`, `.align-start`, `.align-stretch`
*   **Sizing:** `.flex-1`, `.flex-auto`, `.flex-shrink-0`

## 6. Typography (`typography.css`)
*   **Size:** `.text-xs` up to `.text-5xl`
*   **Weight:** `.fw-normal`, `.fw-medium`, `.fw-semibold`, `.fw-bold`, `.fw-extrabold`, `.fw-black`
*   **Style:** `.uppercase`, `.capitalize`, `.tracking-tight`, `.leading-none`, `.leading-normal`
*   **Helpers:** `.truncate` (adds `...` for long usernames or addresses)

## 7. Structure & Interaction (`borders.css`)
*   **Width:** `.border-0`, `.border-sm`, `.border-md`, `.border-lg`, `.border-b`, `.border-t`
*   **Radius:** `.rounded-0` to `.rounded-7`, `.rounded-full` (pill buttons), `.rounded-circle` (avatars)
*   **Shadows:** `.shadow-none`, `.shadow-sm`, `.shadow-md`
*   **Interaction:** `.brutal-click` (Neubrutalist active state translation and shadow flattening)

## 8. Positioning (`position.css`)
*   **Type:** `.pos-relative`, `.pos-absolute`, `.pos-fixed`, `.pos-sticky`
*   **Placement:** `.top-0`, `.bottom-0`, `.left-0`, `.inset-0`
*   **Translation:** `.translate-middle`, `.translate-middle-x`, `.translate-middle-y`
*   **Z-Index:** `.z-negative`, `.z-10` to `.z-50`, `.z-max`

## 9. Grid & Breakpoints (`responsive.css`)
*   **Grid System:** `.row` combined with `.col-1` through `.col-12`
*   **Breakpoints:** Mobile (Default), Tablet (`-md-`), Desktop (`-lg-`)
*   **Visibility:** `.d-none`, `.d-md-block`, `.d-md-flex`, `.d-lg-none`

## 10. Forms & Controls (`forms.css`)
*   **Inputs:** `.form-control` (Thick borders, Space Grotesk font, aggressive pink focus shadow)
*   **Toggles:** `.form-check` (Custom brutalist square checkboxes and circular radio buttons)

## 11. Aspect Ratios (`aspect.css`)
*   **Square (1:1):** `.aspect-square` (For grids, avatars, and explore layouts)
*   **Portrait (4:5):** `.aspect-portrait` (Standard social media photo ratio)
*   **Video (16:9):** `.aspect-video` (For embeds and wide media)
*   **Photo (3:4):** `.aspect-photo`

## 12. Animations & Motion (`animations.css`)
*   **Loading States:** `.animate-pulse` (Grey background pulsing for skeletons)
*   **Modals/Menus:** `.animate-slide-up` (For bottom sheets)
*   **Alerts/Toasts:** `.animate-fade-in` 

## 13. Scrollbars (`scrollbars.css`)
*   **Webkit Override:** Global custom scrollbar styling to replace default browser UI.
*   **Design:** Chunky 12px track, primary pop color thumb, thick borders to match the Neubrutalist layout.

## 14. Buttons (`buttons.css`)
*   **Base:** `.btn` (Includes bold uppercase text, thick border, drop shadow, and active click state).
*   **Sizes:** `.btn-sm`, `.btn-md`, `.btn-lg`, `.btn-icon` (square aspect ratio).
*   **Colors:** `.btn-primary`, `.btn-pink`, `.btn-lavender`, `.btn-blue`, `.btn-dark` (inverted).
*   **Variants:** `.btn-outline` (transparent background), `.btn-ghost` (no border, no background, no shadow).