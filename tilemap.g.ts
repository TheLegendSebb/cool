// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020202020202020202020202020203040000000000000000000000040000040400040404040404000000000407000404000400070000040404040400000004040004000000000004070404000400040400040404040400000004000000040404000000000004000404040000040404040000000700040004000000040400040400040404040400000007000400000404000404000000000000000404000004040000040404040400000404000000040400000400070004000004000700000404000004040000040000040000000004040000000000040400040000000000040400000007000400000404040400000406040404040404040404040404040405`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile6,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile9,sprites.swamp.swampTile14,sprites.swamp.swampTile12,sprites.swamp.swampTile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
