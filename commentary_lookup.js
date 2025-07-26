// Commentary lookup table for efficient telemetry
// Instead of sending full text, we send section + index

export const COMMENTARY_LOOKUP = {
    'casino_straight': [
        "FLYING down Casino Straight!",
        "MAXIMUM ATTACK on the straight!",
        "Building INCREDIBLE speed!",
        "The crowd goes WILD!",
        "PUSHING the limits here!",
        "What a MISSILE down this straight!"
    ],
    'beau_rivage': [
        "ATTACKING the hill!",
        "Climbing like a ROCKET!",
        "Defying GRAVITY here!",
        "The car is FLYING uphill!",
        "SPECTACULAR hill climb!",
        "Power delivery is PERFECT!"
    ],
    'massenet_complex': [
        "THREADING the needle!",
        "Surgical PRECISION required!",
        "DANCING through Massenet!",
        "This is POETRY in motion!",
        "INCREDIBLE car control!",
        "Making it look EASY!"
    ],
    'mirabeau_descent': [
        "PLUNGING down Mirabeau!",
        "GRAVITY-DEFYING descent!",
        "The DROP is INSANE!",
        "COMMITMENT through here!",
        "Brake temps CRITICAL!",
        "FEARLESS through the descent!"
    ],
    'portier_approach': [
        "SETTING UP for glory!",
        "The tunnel BECKONS!",
        "PRECISION before darkness!",
        "Heart rate SPIKING!",
        "PERFECT positioning!",
        "The calm before the STORM!"
    ],
    'monaco_tunnel_entry': [
        "HERE COMES THE TUNNEL!",
        "Into the ABYSS!",
        "LIGHTS OUT ahead!",
        "BRACE for darkness!",
        "The FAMOUS tunnel awaits!",
        "COMMITTED to the entry!"
    ],
    'grand_tunnel': [
        "THUNDERING through darkness!",
        "ECHO CHAMBER of speed!",
        "FLAT OUT in the tunnel!",
        "The sound is DEAFENING!",
        "PURE SPEED in darkness!",
        "EMERGING like a MISSILE!"
    ],
    'nouvelle_chicane': [
        "BLINDED by daylight!",
        "LIGHTNING reflexes!",
        "SNAP direction change!",
        "From darkness to CHAOS!",
        "NAILING the chicane!",
        "What a TRANSITION!"
    ],
    'piscine_complex': [
        "DIVING into the pool!",
        "TECHNICAL MASTERCLASS!",
        "PRECISION at the limit!",
        "Swimming pool BALLET!",
        "INCH-PERFECT through here!",
        "The crowd is ON THEIR FEET!"
    ],
    'rascasse_finale': [
        "FINAL PUSH TO GLORY!",
        "The finish line CALLS!",
        "MAXIMUM ATTACK to the line!",
        "GIVE IT EVERYTHING!",
        "The LEGENDARY Rascasse!",
        "HISTORY in the making!"
    ]
};

// Helper function to get commentary text
export function getCommentary(section, index) {
    if (!section || !COMMENTARY_LOOKUP[section] || index < 0) {
        return "Racing through the circuit!";
    }
    
    const comments = COMMENTARY_LOOKUP[section];
    if (index >= comments.length) {
        return comments[0]; // Fallback to first comment
    }
    
    return comments[index];
}