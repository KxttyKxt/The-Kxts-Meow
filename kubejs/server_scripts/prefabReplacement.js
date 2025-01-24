onEvent('recipes', event => {
    console.log("☆ Fired the Prefab Recipe Replacements.")

    // Dirt Blocks
    event.replaceInput(
        { input: 'prefab:block_compressed_dirt' },
        'prefab:block_compressed_dirt',
        'compressium:dirt_1'
    )
    event.replaceInput(
        { input: 'prefab:block_double_compressed_dirt' },
        'prefab:block_double_compressed_dirt',
        'compressium:dirt_2'
    )


    // Stone Blocks
    event.replaceInput(
        { input: 'prefab:block_compressed_stone' },
        'prefab:block_compressed_stone',
        'compressium:stone_1'
    )
    event.replaceInput(
        { input: 'prefab:block_double_compressed_stone' },
        'prefab:block_double_compressed_stone',
        'compressium:stone_2'
    )
    event.replaceInput(
        { input: 'prefab:block_triple_compressed_stone' },
        'prefab:block_triple_compressed_stone',
        'compressium:stone_3'
    )

    // Obsidian Blocks
    event.replaceInput(
        { input: 'prefab:block_compressed_obsidian' },
        'prefab:block_compressed_obsidian',
        'compressium:obsidian_1'
    )
    event.replaceInput(
        { input: 'prefab:block_double_compressed_obsidian' },
        'prefab:block_double_compressed_obsidian',
        'compressium:obsidian_2'
    )
    
    // Farm Crates
    event.replaceInput(
        { input: 'prefab:item_crate_of_carrots' },
        'prefab:item_crate_of_carrots',
        'farmersdelight:carrot_crate'
    )
    event.replaceInput(
        { input: 'prefab:item_crate_of_beets' },
        'prefab:item_crate_of_beets',
        'farmersdelight:beetroot_crate'
    )
    event.replaceInput(
        { input: 'prefab:item_crate_of_potatoes' },
        'prefab:item_crate_of_potatoes',
        'farmersdelight:potato_crate'
    )
    event.replaceInput(
        { input: 'prefab:item_carton_of_eggs' },
        'prefab:item_carton_of_eggs',
        'incubation:chicken_egg_create'
    )
})
