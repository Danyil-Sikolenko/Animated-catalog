import { showLoader, hideLoader } from "./loader.js";
import { URLRENDERITEMS, URLRENDERMODELS } from "../api/api.js";

export async function DataModels() {
    try {
        showLoader()
        const response = await fetch(URLRENDERMODELS)

        if (!response.ok) {
            throw new Error(`ERROR: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error loading models:', error)
        return null
    }
    finally {
        hideLoader()
    }
}

export async function DataItems() {
    try {
        showLoader()
        const response = await fetch(URLRENDERITEMS)

        if (!response.ok) {
            throw new Error(`ERROR: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error loading products:', error)
        return null
    }
    finally {
        hideLoader()
    }
}