give @s akashictome:tome{"akashictome:is_morphing": 1b, "akashictome:data": {mythicmounts: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "mythicmounts:mythical_mounts", "akashictome:is_morphing": 1b, display: {Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"Mythical Mounts"}]}'}, "akashictome:displayName": {text: '{"translate":"Mythical Mounts"}'}}}, solapplepie: {id: "solapplepie:food_book", Count: 1b}, hexerei: {id: "hexerei:book_of_shadows", Count: 1b, tag: {page: 0, "akashictome:is_morphing": 1b, bookmarks: {}, opened: 0b, chapter: 0, display: {Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.hexerei.book_of_shadows"}]}'}, "akashictome:displayName": {text: '{"translate":"item.hexerei.book_of_shadows"}'}}}}} 1

scoreboard players set @s akashic-tome-recovery 0
scoreboard players enable @s akashic-tome-recovery

execute at @s run playsound minecraft:item.book.page_turn player @s ~ ~ ~
execute at @s run playsound minecraft:entity.experience_orb.pickup player @s ~ ~ ~ 1 1.5

tellraw @s {"text": "☆ Enjoy your new book!", "color": "light_purple"}