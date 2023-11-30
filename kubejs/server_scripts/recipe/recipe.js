// priority: 1

/**
 * @type {Special.Item[]}
 */
global.deleteItem = [
	//"ars_nouveau:warp_scroll",
	//"ars_nouveau:stable_warp_scroll",
	"#quark:vertical_slabs",
	'additionaladditions:wrench',
	'additionaladditions:rope',
	'additionaladditions:berry_pie',
	'additionaladditions:fried_egg',
	'additionaladditions:chicken_nugget',
	'additionaladditions:honeyed_apple',
	'createaddition:electrum_amulet',
	//'create_new_age:energiser_t3',
	//'create_new_age:electrical_connector',
	//'create_new_age:copper_wire',
	//'create_new_age:energiser_t2',
	//'create_new_age:energiser_t1',
	'create_new_age:reinforced_motor',
	'create_new_age:advanced_motor',
	'create_new_age:basic_motor',
	'create_new_age:overcharged_iron_wire',
	'create_new_age:overcharged_golden_wire',
	'create_new_age:overcharged_diamond_wire',
	'starbunclemania:star_sword',
	'starbunclemania:star_saddle',
	/^(createdeco:.*_coin)$/,
	/^(createdeco:.*_coinstack)$/,
	'biomesoplenty:porous_flesh',
	'biomesoplenty:flesh',
	'biomesoplenty:pus_bubble',
	'biomesoplenty:flesh_tendons',
	'biomesoplenty:hair',
	'biomesoplenty:eyebulb',
	'culturaldelights:cooked_calamari',
	'culturaldelights:raw_calamari',
	'culturaldelights:cooked_squid',
	'culturaldelights:squid',
	'culturaldelights:glow_squid',
	'nethersdelight:blackstone_furnace',
	'create_dd:refined_radiance',
	'create_dd:refined_radiance_sheet',
	'create_dd:refined_radiance_casing',
	'create_dd:shadow_steel',
	'create_dd:shadow_steel_sheet',
	'create_dd:shadow_steel_casing',
	'create_dd:kinetic_motor',
	'create_dd:accelerator_motor',
	'create_new_age:advanced_motor_extension',
	'create_new_age:basic_motor_extension',
	/^(create_dd:infa.*)$/,
	'create_dd:frozen_nugget',
	'create_dd:experience_mass',
	'create_dd:experience_ingot',
	'create_dd:chromatic_block',
	'create_dd:chromatic_compound',
	'create_dd:mossy_andesite_casing',
	'create_dd:leather_block',
	'create_dd:stargaze_singularity_block',
	'create_dd:netherite_casing',
	'create_dd:mossy_andesite_alloy_block',
	'create_dd:stargaze_singularity_casing',
]

/**
 * @type {Special.Item}
 */
global.replaceItem = {
	"hexerei:animal_fat": "delightful:animal_fat",
	"create:dough": 'farmersdelight:wheat_dough',
	'quark:rope': 'supplementaries:rope',
	'farmersdelight:rope': 'supplementaries:rope',
	'createdeco:iron_ladder': 'quark:iron_ladder',
	'immersive_weathering:mulch_block': 'farmersdelight:organic_compost',
	'farmersdelight:tree_bark': '#immersive_weathering:bark',
	'supplementaries:ash': 'immersive_weathering:ash_layer_block',
}

/** 特定のレシピを削除
 * @type {Special.RecipeId[]}
 */
let removeRecipeID = [
	"immersiveengineering:crafting/coke_to_coal_coke",
	"createchromaticreturn:carbon_powder_recipe",
	//"ae2:inscriber/certus_quartz_dust",
	"immersiveengineering:crafting/pickaxe_steel",
	"immersiveengineering:crafting/axe_steel",
	"immersiveengineering:crafting/shovel_steel",
	"immersiveengineering:crafting/hoe_steel",
	"immersiveengineering:crafting/sword_steel",
	"minecraft:compacting/cast_iron_ingot",
	"createdeco:cast_iron_ingot_from_cast_iron_block",
	"create:item_application/copper_casing_from_log_using_deployer",
	"create:item_application/copper_casing_from_wood_using_deployer",
	"create:item_application/copper_casing_from_log",
	"create:item_application/copper_casing_from_wood",
	"minecraft:compacting/cast_iron_block",
	"farmersdelight:rope",
	"quark:building/crafting/rope",
	"farmersdelight:organic_compost_from_rotten_flesh",
	"farmersdelight:organic_compost_from_tree_bark",
	"culturaldelights:cutting/raw_calamari",
	"culturaldelights:smelting/cooked_squid_from_smoking",
	"culturaldelights:smelting/cooked_squid",
	"culturaldelights:smelting/cooked_squid_from_campfire",
	"culturaldelights:cutting/raw_calamari_from_glowsquid",
	"culturaldelights:smelting/cooked_glowsquid_from_smoking",
	"culturaldelights:smelting/cooked_glowsquid",
	"culturaldelights:smelting/cooked_glowsquid_from_campfire",
]

/**
 * @type {Special.RecipeType[]}
 */
global.deleteRecipeType = [
]

/**
 * @type {Special.Enchantment[]}
 */
const deleteEnchantType = [
]

ServerEvents.recipes(event => {
	const { minecraft, create, immersiveengineering } = event.recipes;
	const { createaddition } = global.recipes;

	// 一部レシピの材料を鋳鉄に変更
	{
		let use_cast_iron_recipes = [
			/^(supplementaries:candle_holders\/candle_holder_.*)$/,
			"supplementaries:faucet",
			"minecraft:cauldron",
			"decoration_delight:sink_recipe",
			"decoration_delight:trash_bin_recipe",
			"farmersdelight:cooking_pot",
			"farmersdelight:skillet",
			"farmersdelight:stove",
			"supplementaries:spring_launcher",
		]

		use_cast_iron_recipes.forEach(element => {
			event.replaceInput({ id: element }, "iron_ingot", '#forge:ingots/cast_iron')
		});
	}

	event.replaceOutput({ id: "farmersdelight:cutting/oak_log" }, 'farmersdelight:tree_bark', Item.of("immersive_weathering:oak_bark"))
	event.replaceOutput({ id: "farmersdelight:cutting/dark_oak_log" }, 'farmersdelight:tree_bark', Item.of("immersive_weathering:dark_oak_bark"))
	event.replaceOutput({ id: "farmersdelight:cutting/spruce_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:spruce_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/birch_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:birch_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/jungle_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:jungle_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/acacia_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:acacia_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/mangrove_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:mangrove_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/crimson_hyphae" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:crimson_scales'))
	event.replaceOutput({ id: "farmersdelight:cutting/warped_hyphae" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:warped_scales'))
	event.replaceOutput({ id: "farmersdelight:cutting/oak_wood" }, 'farmersdelight:tree_bark', Item.of("immersive_weathering:oak_bark"))
	event.replaceOutput({ id: "farmersdelight:cutting/dark_oak_wood" }, 'farmersdelight:tree_bark', Item.of("immersive_weathering:dark_oak_bark"))
	event.replaceOutput({ id: "farmersdelight:cutting/spruce_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:spruce_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/birch_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:birch_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/jungle_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:jungle_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/acacia_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:acacia_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/mangrove_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:mangrove_bark'))
	event.replaceOutput({ id: "farmersdelight:cutting/crimson_stem" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:crimson_scales'))
	event.replaceOutput({ id: "farmersdelight:cutting/warped_stem" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:warped_scales'))

	event.replaceInput({ id: "quark:oddities/crafting/backpack" }, Item.of("quark:ravager_hide"), Item.of("string"))
	event.replaceInput({ id: "quark:building/crafting/iron_ladder" }, Item.of("iron_nugget"), Item.of("#forge:rods/iron"))

	event.shaped(Item.of("immersive_weathering:steel_wool"), [
		"###",
		"###"
	], {
		"#": "#forge:wires/iron"
	}).id("immersive_weathering:crafting/steel_wool")

	event.remove({ id: "suppsquared:metal_frame" })
	event.shaped("suppsquared:metal_frame", [
		" / ",
		"/ /",
		" / "
	], {
		"/": "#forge:rods/iron"
	}).id("suppsquared:metal_frame")

	event.remove({ id: "suppsquared:metal_brace" })
	event.shaped("suppsquared:metal_brace", [
		"  /",
		"/ /",
		"/  "
	], {
		"/": "#forge:rods/iron"
	}).id("suppsquared:metal_brace")

	event.remove({ id: "suppsquared:metal_cross_brace" })
	event.shaped('suppsquared:metal_cross_brace', [
		"/ /",
		"   ",
		"/ /"
	], {
		"/": "#forge:rods/iron"
	}).id("suppsquared:metal_cross_brace")

	event.shaped('3x create:brass_ladder', [
		"/ /",
		"/#/",
		"/ /"
	], {
		"/": "#forge:rods/brass",
		"#": "#forge:ingots/brass",
	}).id("create:crafting/brass_ladder")

	event.shaped('3x create:copper_ladder', [
		"/ /",
		"/#/",
		"/ /"
	], {
		"/": "#forge:rods/copper",
		"#": "#forge:ingots/copper",
	}).id("create:crafting/copper_ladder")

	event.shaped('3x createdeco:gold_ladder', [
		"/ /",
		"/#/",
		"/ /"
	], {
		"/": "#forge:rods/gold",
		"#": "#forge:ingots/gold",
	}).id("createdeco:crafting/gold_ladder")

	event.remove({ id: "quark:automation/crafting/iron_rod" })
	event.shaped(Item.of('quark:iron_rod'), [
		"/",
		"/",
		"#"
	], {
		"/": "#forge:rods/iron",
		"#": '#forge:ingots/iron'
	}).id("quark:automation/crafting/iron_rod")

	event.remove({ id: "decorative_blocks:rocky_dirt" })
	event.shaped(Item.of('decorative_blocks:rocky_dirt', 2), [
		"dr",
		"rd"
	], {
		"d": "dirt",
		"r": 'rocks:cobblestone_splitter'
	}).id("decorative_blocks:rocky_dirt")

	event.smelting(Item.of("quark:clear_shard"), Item.of("immersive_weathering:sand_layer_block"))
	event.smelting(Item.of("quark:clear_shard"), Item.of("immersive_weathering:red_sand_layer_block"))

	event.replaceInput({ id: "quark:tools/crafting/seed_pouch" }, 'leather', 'farmersdelight:canvas')

	event.replaceInput({ id: "torchmaster:megatorch" }, 'torch', Item.of("create:refined_radiance"))
	event.replaceInput({ id: "torchmaster:feral_flare_lantern" }, 'glowstone_dust', Item.of("create:refined_radiance"))
	event.replaceInput({ id: "torchmaster:dreadlamp" }, 'black_dye', Item.of("create:shadow_steel"))
	event.replaceInput({ id: "create:mechanical_crafting/wand_of_symmetry" }, 'ender_pearl', Item.of("create:shadow_steel"))

	// enigmaticunity
	{
		// enigmaticunity:bright_source_generator
		event.remove({ id: "enigmaticunity:bright_source_generator" })
		createaddition.charging(event, "enigmaticunity:bright_source_generator", "enigmaticunity:dim_source_generator", 10000, "enigmaticunity:bright_source_generator")

		// enigmaticunity:iridescent_source_generator
		event.remove({ id: "enigmaticunity:iridescent_source_generator" })
		createaddition.charging(event, "enigmaticunity:iridescent_source_generator", "enigmaticunity:bright_source_generator", 20000, "enigmaticunity:iridescent_source_generator")

		// enigmaticunity:bright_source_producer
		event.remove({ id: "enigmaticunity:bright_source_producer" })
		createaddition.charging(event, "enigmaticunity:bright_source_producer", "enigmaticunity:dim_source_producer", 10000, "enigmaticunity:bright_source_producer")

		// enigmaticunity:iridescent_source_producer
		event.remove({ id: "enigmaticunity:iridescent_source_producer" })
		createaddition.charging(event, "enigmaticunity:iridescent_source_producer", "enigmaticunity:bright_source_producer", 20000, "enigmaticunity:iridescent_source_producer")
	}

	// create
	{
		// ネザーラック
		//create.haunting("netherrack", "clay", 100).id("create:haunting/netherrack")

		// 色彩の化合物
		create.mixing("create:chromatic_compound", ["create:polished_rose_quartz", "3x create:powdered_obsidian", "3x glowstone_dust"]).superheated().id("create:mixing/chromatic_compound")

		// 光輝ケーシング
		create.item_application("create:refined_radiance_casing", ["create:andesite_alloy_block", "create:refined_radiance"]).id("create:item_application/refined_radiance_casing")

		// シャドウケーシング
		create.item_application("create:shadow_steel_casing", ["create:industrial_iron_block", "create:shadow_steel"]).id("create:item_application/shadow_steel_casing")

		// 炭の粉末
		create.crushing("9x #forge:dusts/coal", "#forge:storage_blocks/coal").id("create:crushing/9x_coal_dust")

		create.crushing(["2x #forge:dusts/sulfur", Item.of("#forge:dusts/sulfur").withChance(0.5)], '#forge:storage_blocks/sulfur').id("create:crushing/sulfur")

		event.remove({ id: "sophisticatedbackpacks:backpack" })
		event.shaped('sophisticatedbackpacks:backpack', [
			"SLS",
			"SCS",
			"LLL"
		], {
			"S": '#supplementaries:ropes',
			"L": '#forge:leather',
			"C": '#create:toolboxes'
		}).id("sophisticatedbackpacks:backpack")

		create.mixing("3x #forge:ingots/cast_iron", ["3x iron_ingot", "#minecraft:coals"], 200, "lowheated")//.id()
		create.pressing("#forge:ingots/cast_iron", ["3x iron_ingot", "#minecraft:coals"], 200, "lowheated")//.id()

		/**
		event.remove({ id: "create_new_age:reactor/reactor_casing" })
		create.sequenced_assembly(Item.of("create_new_age:reactor_casing"), "create:shadow_steel_casing", [
			create.deploying("create_new_age:incomplete_casing", ["create_new_age:incomplete_casing", "#forge:plates/lead"]),
			create.deploying("create_new_age:incomplete_casing", ["create_new_age:incomplete_casing", "#forge:plates/steel"]),
			create.pressing("create_new_age:incomplete_casing", "create_new_age:incomplete_casing")
		]).transitionalItem("create_new_age:incomplete_casing").loops(3).id("create_new_age:reactor/reactor_casing")
		 */

		event.replaceInput({ id: "createchunkloading:mechanical_crafting/chunk_loader" }, "beacon", "create:refined_radiance")
	}

	// farmer
	{
	}

	// immersiveengineering
	{
		// ツールに使う素材を鉄→鋼鉄に変更
		event.replaceInput({ id: "immersiveengineering:crafting/hammer" }, "iron_ingot", "#forge:ingots/steel")
		event.replaceInput({ id: "immersiveengineering:crafting/wirecutter" }, "iron_ingot", "#forge:ingots/steel")
		event.replaceInput({ id: "immersiveengineering:crafting/screwdriver" }, "#forge:rods/iron", "#forge:rods/steel")

		// ブループリント系のレシピ
		event.shaped("immersiveengineering:blueprint", [
			"BBB",
			"PPP"
		], {
			"B": '#forge:dyes/blue',
			"P": "paper"
		}).id("immersiveengineering:crafting/blueprint")
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"bannerpatterns"}'), ["immersiveengineering:blueprint", "#minecraft:banners"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'), ["immersiveengineering:blueprint", "#forge:plates/iron"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), ["immersiveengineering:blueprint", "copper_ingot", "#forge:ingots/aluminum", "iron_ingot"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'), ["immersiveengineering:blueprint", "gunpowder", "gunpowder", "immersiveengineering:empty_casing"])

		// 棒のレシピを変更
		let rod = function (input, output, id) {
			event.remove({ id: id })
			event.shaped(Item.of(output, 3), [
				"#",
				"#"
			], {
				"#": input
			}).id(`${id}_manual_only`)
		}

		rod("#forge:ingots/iron", 'immersiveengineering:stick_iron', "immersiveengineering:crafting/stick_iron")
		rod("#forge:ingots/steel", 'immersiveengineering:stick_steel', "immersiveengineering:crafting/stick_steel")
		rod("#forge:ingots/copper", 'immersiveposts:stick_copper', "immersiveposts:has_copper_rod")
		rod("#forge:ingots/gold", 'immersiveposts:stick_gold', "immersiveposts:has_gold_rod")
		rod("#forge:ingots/silver", "immersiveposts:stick_silver", "immersiveposts:has_silver_rod")
		rod("#forge:ingots/lead", "immersiveposts:stick_lead", "immersiveposts:has_lead_rod")
		rod("#forge:ingots/nickel", "immersiveposts:stick_nickel", "immersiveposts:has_nickel_rod")
		rod("#forge:ingots/aluminum", "immersiveengineering:stick_aluminum", "immersiveengineering:crafting/stick_aluminum")
		rod("#forge:ingots/constantan", "immersiveposts:stick_constantan", "immersiveposts:has_constantan_rod")
		rod("#forge:ingots/electrum", "immersiveposts:stick_electrum", "immersiveposts:has_electrum_rod")
		rod("#forge:ingots/uranium", "immersiveposts:stick_uranium", "immersiveposts:has_uranium_rod")
		rod("#forge:ingots/brass", 'createaddition:brass_rod', "immersiveengineering:crafting/stick_brass")

	}
})

ServerEvents.tags("item", tag => {
	tag.add("forge:storage_blocks/sulfur", "biomesoplenty:brimstone")
	tag.add("hexerei:tallow_meltable", "delightful:animal_fat")

	tag.add("fabrication:nether_tools", ["golden_sword", "golden_pickaxe", "golden_axe", "golden_shovel", "golden_hoe"])
	tag.add("fabrication:nether_only_tools", ["netherite_sword", "netherite_pickaxe", "netherite_axe", "netherite_shovel", "netherite_hoe"])
	Ingredient.custom(stack => stack.item.isFireResistant()).displayStacks.forEach(element => tag.add("tooltip:fire_resistance", element.id))

	// Slab
	Ingredient.of(/^((?!.*vertical).*slab(?!.*vert).*)$/).getItemIds().forEach(element => tag.add("minecraft:slabs", element))
	Ingredient.of(/^(.*_vertical_slab)$/).getItemIds().forEach(element => tag.add("quark:vertical_slabs", element))
	Ingredient.of(/^(createdeco:.*_slab_vert)$/).getItemIds().forEach(element => tag.add("quark:vertical_slabs", element))

	//// tag.add("fabrication:nether_tools", ["ae2:nether_quartz_sword", "ae2:nether_quartz_pickaxe", "ae2:nether_quartz_axe", "ae2:nether_quartz_shovel", "ae2:nether_quartz_hoe"])

	// Curios
	tag.remove("curios:ring", ["botania:odin_ring", "botania:thor_ring", "botania:loki_ring"])
	tag.remove("curios:head", ["botania:flight_tiara"])
	tag.add("curios:super_curio", ["botania:odin_ring", "botania:thor_ring", "botania:loki_ring", "botania:flight_tiara"])

})

ServerEvents.tags("block", tag => {
	tag.add("farmersdelight:tray_heat_sources", ["decorative_blocks:brazier", "decorative_blocks:soul_brazier"])

	//// Ingredient.of(/^geolosys:.*_ore_sample/).getItemIds().forEach(element => tag.add("geolosys:ore_samples", element))
	//// Ingredient.of(/^rocks:.*rock/).getItemIds().forEach(element => tag.add("rocks:rocks", element))
	//// Ingredient.of(/^rocks:.*_stick/).getItemIds().forEach(element => tag.add("rocks:sticks", element))
	tag.add("snowrealmagic:containables", ["ars_nouveau:sourceberry_bush", '#geolosys:ore_samples', 'biomesoplenty:clover', 'delightful:mini_melon', 'biomesoplenty:dead_branch', 'immersive_weathering:weeds', '#rocks:rocks', "#rocks:sticks", 'rocks:pinecone', 'rocks:seashell'])
	tag.add("snowrealmagic:offset_y", ['#forge:ore_sample'])
	tag.add('supplementaries:hourglass_dusts', ['immersive_weathering:ash_layer_block'])
	tag.add('forge:dusts/ash', ['immersive_weathering:ash_layer_block'])
})

ServerEvents.tags("fluid", event => {
})

ServerEvents.recipes((event) => {
	/** 手元クラフトでしか作れないレシピ
	 * @type {Special.Item[]}
	 */
	let manual_only = [
		"immersiveengineering:hammer",
		"immersiveengineering:wirecutter",
		"glass_bottle",
		"bowl"
	]
	manual_only.forEach(element => {
		event.forEachRecipe({ input: element, type: "minecraft:crafting_shapeless" }, (recipe) => {
			recipe.id(`${recipe.getId()}_manual_only`);
		})
	})
	event.forEachRecipe({ type: "immersiveengineering:hammer_crushing" }, (recipe) => {
		recipe.id(`${recipe.getId()}_manual_only`);
	})

	// 削除関連
	{
		// 特定のレシピを削除
		removeRecipeID.forEach(element => {
			event.remove({ id: element });
		})

		// レシピタイプを削除
		global.deleteRecipeType.forEach(element => {
			event.remove({ type: element });
		})
		// アイテムを削除
		global.deleteItem.forEach(element => {
			event.remove({ output: element });
			event.remove({ input: element });
		})

		// 置き換えるアイテム
		for (const [key, value] of Object.entries(global.replaceItem)) {
			event.replaceInput({ input: key }, key, value)
			event.replaceOutput({ output: key }, key, value)
		}
	}
})

LootJS.modifiers(event => {
	event.addBlockLootModifier("#forge:ores").modifyLoot("#forge:raw_materials", item => {
		const replacement = AlmostUnified.getReplacementForItem(item);
		if (replacement.isEmpty()) {
			return item;
		}
		replacement.setCount(item.getCount());
		return replacement;
	});

	global.deleteItem.forEach(element => {
		event.addLootTableModifier(/.*/).removeLoot(element)
	})

	for (const [key, value] of Object.entries(global.replaceItem)) {
		event.addLootTableModifier(/.*/).replaceLoot(key, value)
	}

	// 草からドロップする藁を植物の繊維に変更
	event.addBlockLootModifier("grass").replaceLoot('farmersdelight:straw', 'kubejs:plant_fiber')
	event.addBlockLootModifier("tall_grass")
		.replaceLoot('farmersdelight:straw', 'kubejs:plant_fiber')
		.replaceLoot("minecraft:grass", "minecraft:tall_grass");

})

// エンチャントを削除する
MoreJSEvents.filterEnchantedBookTrade(e => {
	e.remove(deleteEnchantType)
})
MoreJSEvents.filterAvailableEnchantments(e => {
	e.remove(deleteEnchantType)
})