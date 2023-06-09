import { AppContext, PathType } from '~/types'

declare global {
    export interface Window {
        POSTHOG_APP_CONTEXT?: AppContext
        SENTRY_DSN?: string
        SENTRY_ENVIRONMENT?: string
    }
}

export function getAppContext(): AppContext | undefined {
    return window.POSTHOG_APP_CONTEXT || undefined
}

export function getDefaultEventName(): string {
    return getAppContext()?.default_event_name || PathType.PageView
}
