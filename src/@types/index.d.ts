interface FormComponent {
    type: 'button' | 'textField' | 'dropdown' | 'slider' | 'toggle';
    label: string;
    placeholder?: string;
    defaultValue?: string | number | boolean;
    options?: string[];
    min?: number;
    max?: number;
    step?: number;
    callback?: (response: any) => Promise<void> | void;
    iconPath?: string;
    textfieldType?: 'string' | 'number';
}

interface FeedbackOptions {
    sound?: string;
    title?: string;
    subtitle?: string;
    actionBar?: string;
}

interface Vec3 {
    x: number;
    y: number;
    z: number;
}

interface GameSettings {
    wins: number;
    maxWins: number;
    fillSettings: FillSettings;
    defaultCountdownTime: number;
    countdownTickInterval: number;
    doesCameraRotate: boolean;
    useBarriers: boolean;
    randomizeBlocks: boolean;
    giftGoal: GiftGoalSettings;
    timerDuration: number;
}

interface StructureProperties {
    centerLocation: Vec3;
    width: number;
    height: number;
    blockOptions: {
        baseBlockName: string;
        sideBlockName: string;
    };
}

interface GameState {
    isPlayerInGame: boolean;
    structureProperties: StructureProperties;
    gameSettings: GameSettings;
}

interface FillSettings {
    blockName: string;
    tickInterval: number;
    blocksPerTick: number;
}

type TimerAction = 'start' | 'stop' | 'restart';

interface SummonOptions {
    locationType?: 'center' | 'random';
    onTop?: boolean;
    customLocations?: Vec3[];
    amount?: number;
    clearBlocksAfterSummon?: boolean;
    batchSize?: number;
    delayBetweenBatches?: number;
    onSummon?: () => void;
}

interface WinActions {
    onWin: () => void;
    onMaxWins: () => void;
}

interface TikTokGift {
    icon: string;
    coins: number;
}

interface GiftGoalSettings {
    giftName: string;
    maxCount: number;
    currentCount: number;
    isActive: boolean;
    isEnabled: boolean;
}
