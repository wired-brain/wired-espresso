let waterLevel: number = 0;

export function getWaterLevel() {
    return waterLevel
}

export function setWaterLevel(value: number) {
    waterLevel = value;
}

export function validate(): boolean {
    return waterLevel >= 0;
}