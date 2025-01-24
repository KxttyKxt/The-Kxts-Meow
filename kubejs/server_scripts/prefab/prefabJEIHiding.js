// DOES NOT FUNCTION

onEvent('jei.hide.items', event => {
    
    // Blocks/Items whose recipes were replaced/removed
    event.hide('prefab:block_compressed_dirt')
    event.hide('prefab:block_double_compressed_dirt')

    event.hide('prefab:block_compressed_stone')
    event.hide('prefab:block_double_compressed_stone')
    event.hide('prefab:block_triple_compressed_stone')

    event.hide('prefab:block_compressed_obsidian')
    event.hide('prefab:block_double_compressed_obsidian')

    event.hide('prefab:item_crate_of_carrots')
    event.hide('prefab:item_crate_of_beets')
    event.hide('prefab:item_crate_of_potatoes')
    event.hide('prefab:item_carton_of_eggs')

    // Prefabs I made unobtainable
    // ...
})