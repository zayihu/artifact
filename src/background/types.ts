export interface Panel {
    id: number
    name: string
    identity: string
    state: 'active'|'inactive'
}

export interface Tab {
    id: number
    name: string
    url: string
    identity: string,
    state: 'active'|'inactive'
}

export interface Items {
    panels: Panel[]
    tabs: Tab[]
    settings: {}
}

export interface changePayload {
    type: 'settings'|'tabs'|'panels'
    data: {id: number, change: {}}
}
export interface createPayload {
    type: 'tabs'|'panels'
    data: Panel|Tab
}
export interface deletePayload {
    type: 'tabs'|'panels'
    id: number
}

