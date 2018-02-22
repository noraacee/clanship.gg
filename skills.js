/*jshint esversion: 6 */ 

var SKILLTREE = {
	REQS: [3, 20, 50],
	COSTS: [
		[1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 14, 16, 19, 22, 25], 
		[2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 14, 16, 19, 22, 25, 28], 
		[3, 4, 5, 7, 9, 12, 16, 21, 27, 35, 46, 60]],
	COSTS_TOTAL: [
		[1, 3, 5, 8, 11, 14, 18, 23, 28, 34, 41, 49, 58, 69, 81, 95, 111, 130, 152, 177], 
		[2, 4, 7, 10, 13, 17, 22, 27, 33, 40, 48, 57, 68, 80, 94, 110, 129, 151, 176, 204], 
		[3, 7, 12, 19, 28, 40, 56, 77, 104, 139, 185, 245]],

	KNIGHT: {
		name: "knight",
		color: "#ff6130",
		lvl: 0,
		container: undefined,
		nav: undefined,
		reset: undefined,
		total: undefined,
		info: {
			container: undefined, 
			name: undefined, 
			tier: undefined, 
			img: undefined, 
			sprite: undefined, 
			extra: undefined, 
			locked: undefined, 
			lvl: undefined, 
			close: undefined, 
			info: undefined, 
			stats: undefined, 
			descr: undefined, 
			details: undefined, 
			next: undefined, 
			reqTitle: undefined, 
			req: undefined,
			btns: undefined,
			downgradeBtn: undefined, 
			downgradePts: undefined, 
			downgradeOpt: undefined,
			upgradeBtn: undefined, 
			upgradePts: undefined, 
			upgradeOpt: undefined, 
			pos: undefined
		},
		skills: {
			order: ["f", "l1", "c1", "r1", "l2", "c2", "r2", "l3", "r3"], 
			f: {
				unlocked: false,
				grid: "f",
				tier: 0,
				name: "Knight's Valor",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "Hone your skills as the Sword Master by strengthening your tapping power with the teachings of the old guards.",
				details: [
					"Tap damage directly increases all damage done by Sword Master Attacks, all forms of Pet Attacks, and Heavenly Strikes.", 
					"Tap damage provides a reduced bonus to Shadow Clone attacks."],
				stats: [["x# Tap Damage"]],
				multipliers: [[1.2, 1.6, 2.2, 3.3, 5, 7.4, 11.8, 20.5, 35.5, 66.1, 132, 282.4, 644.7, 1670, 4580, 14100, 48400, 193000, 889000, 4670000]]
			}, 
			l1: {
				unlocked: false,
				grid: "l1",
				prev: "f",
				tier: 0,
				name: "Chivalric Order",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "The Heroes you hire lend their strength to increase your sword-wielding powers, converting a portion of their hero damage into tap damage.",
				details: [
					"Converts a reduced amount of Hero Damage into Tap Damage.", 
					"Weapon Sets and Base Hero Upgrades are applied at the full rate, but only a portion of All Hero and Class Hero bonuses are converted.", 
					"Your Tap Damage bonus directly multiplies with Tap Damage from Heroes.", 
					"This skill improves all damage sources that are improved by increased Tap Damage."],
				stats: [["+#% Tap Damage from Heroes"]],
				multipliers: [[0.0004, 0.0006, 0.0009, 0.0015, 0.0025, 0.004, 0.0067, 0.0116, 0.0204, 0.0371, 0.0701, 0.1373, 0.2788, 0.6049, 1.36, 3.23, 8.13, 22.2, 65.2, 205.5]]
			}, 
			l2: {
				unlocked: false,
				grid: "l2",
				prev: "l1",
				tier: 1,
				name: "Cleaving Strike",
				lvl: 0,
				cost: 2,
				max: 20,
				descr: "A heavy attack that can do incredible damage when it lands, at the cost of reduced accuracy to score a critical hit.",
				details: [
					"Maximum Critical Damage directly improves all Sword Master Critical Hits, and gives an averaged increase to Pet and Shadow Clone attacks.", 
					"Both Pet and Shadow Clone attacks suffer a damage penalty when your Critical Chance is low."],
				stats: [
					["x# Maximum Critical Damage", "-#% Critical Chance"],
					["x# Max Critical Damage", null]],
				multipliers: [
					[1.8, 2.6, 4, 6.2, 9.9, 16.7, 29.4, 54.3, 106.5, 222.6, 499.6, 1210, 3220, 9390, 30400, 111000, 454000, 2130000, 11600000, 73000000],
					[0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2]]
			}, 
			l3: {
				unlocked: false,
				grid: "l3",
				prev: "l2",
				tier: 2,
				name: "Barbaric Fury",
				lvl: 0,
				cost: 3,
				max: 12,
				descr: "Enraged by the overwhelming number of Titans, the Sword Master uncovers the ability to channel energy into furious swings.",
				details: [
					"Adds bonus attacks per second and Tap Damage while actively tapping.", 
					"Bonus Taps per second count towards generating additional Pet Attacks and Hand of Midas Tap Gold.", 
					"When Mana Siphon and Lightning Strike are unlocked, bonus taps per second will help activate these skills as well."],
				stats: [["x# Active Tap Damage", "+# Bonus Taps Per Second"]],
				multipliers: [
					[2.5, 6.4, 18.6, 67.2, 298, 1750, 14200, 166000, 2810000, 72890000, 3090000000, 218000000000],
					[1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 17, 20]]
			}, 
			c1: {
				unlocked: false,
				grid: "c1",
				prev: "f",
				tier: 0,
				name: "Pet Evolution",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "The strong bond between you and your pet encourages it to protect you with more furious attacks.",
				details: [
					"Pet Damage improves all pet attacks, including Lightning Burst and Flash Zip.", 
					"Required Taps per Attack reduces the number of taps per bonus pet attack from 20 by the listed amount."],
				stats: [
					["x# Pet Damage", "-# Required Taps Per Attack"],
					[null, "-# Required Taps Per Atk"]],
				multipliers: [
					[1.5, 2.1, 2.9, 4.4, 6.7, 10.2, 16.9, 30.4, 54.6, 106.2, 222.5, 501.6, 1210, 3350, 9860, 32790, 122000, 534000, 2710000, 15800000],
					[0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10]]
			}, 
			c2: {
				unlocked: false,
				grid: "c2",
				prev: "c1",
				tier: 1,
				name: "Summon Inferno",
				lvl: 0,
				cost: 2,
				max: 20,
				descr: "Ifrit, the God of fire, summons a fiery inferno to aid you in battle.",
				details: [
					"Directly increases Sword Master Attack Damage and Heavenly Strikes.", 
					"Gives a reduced bonus to Shadow Clone Damage."],
				stats: [["x# Fire Sword Damage"]],
				multipliers: [[1.6, 2.3, 3.7, 5.9, 9.3, 16.2, 30.5, 57.4, 117.1, 258, 612.5, 1560, 4580, 14300, 50700, 203000, 957000, 5270000, 33600000, 246000000]]
			}, 
			r1: {
				unlocked: false,
				grid: "r1",
				prev: "f",
				tier: 0,
				name: "Heart of Midas",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "King Midas has given your pet the power to generate gold. When your pet is glowing, tap it to earn additional gold.",
				details: [
					"Heart of Midas gold gives a portion of Base Titan Gold per use, and is improved by the All Gold and Base Titan Gold bonuses; this is not affected by the Chesterson or Boss Gold bonuses.", 
					"Heart of Midas gold is directly multiplied by the Hand of Midas effect when the skill is active."],
				stats: [["+# Heart of Midas Gold", "-#s Cooldown"]],
				multipliers: [
					[4, 11.2, 24.3, 52.1, 107, 215.4, 467.5, 1100, 2560, 6480, 17700, 51900, 164000, 592000, 2270000, 9980000, 49090000, 286000000, 1940000000, 15200000000],
					[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20]]
			}, 
			r2: {
				unlocked: false,
				grid: "r2",
				prev: "r1",
				tier: 1,
				name: "Lightning Burst",
				lvl: 0,
				cost: 2,
				max: 20,
				descr: "Your pet learns a new ability to take down hundreds of Titans in one blow, charging up to destroy enemies with a massive amount of power.",
				details: [
					"Charges and delivers a powerful burst attack that can be used against normal Titans and Bosses.", 
					"When successfully defeating an enemy, the left over splash damage can splash through bosses."],
				stats: [
					["x# Pet Damage Per Burst", "+# Maximum Splash Count"],
					["x# Pet Dmg Per Burst", "+# Max Splash Count"]],
				multipliers: [
					[3, 7.6, 15.5, 28.6, 50.1, 92, 178.4, 343.1, 703.8, 1540, 3590, 8900, 24900, 73700, 244000, 896000, 3820000, 18700000, 104000000, 656000000],
					[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 27, 30, 33, 36, 39, 42, 46, 50]]
			}, 
			r3: {
				unlocked: false,
				grid: "r3",
				prev: "r2",
				tier: 2,
				name: "Flash Zip",
				lvl: 0,
				cost: 3,
				max: 12,
				descr: "During a boss battle, your pet soars into the sky. Tap your pet while it is in the air for bonus damage.",
				details: [
					"Each Tap during the Flash Zip sequences deals with listed amount of damage, with an additional x5 damage dealt on the final blow.", 
					"The next cooldown begins as soon as the current Flash Zip sequence ends."],
				stats: [
					["x# Pet Damage Per Zip Sequence", "-#s Cooldown"],
					["x# Pet Dmg Per Zip Seq", null]],
				multipliers: [
					[10, 26, 73, 263, 1150, 6700, 54200, 631000, 10700000, 282000000, 12200000000, 890000000000],
					[0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
			}
		}
	},

	WARLORD:{
		name: "warlord",
		prev: "KNIGHT",
		color: "#f5d310",
		lvl: 0,
		container: undefined,
		nav: undefined,
		reset: undefined,
		total: undefined,
		info: {
			container: undefined, 
			name: undefined, 
			tier: undefined, 
			img: undefined, 
			sprite: undefined, 
			extra: undefined, 
			locked: undefined, 
			lvl: undefined, 
			close: undefined, 
			info: undefined, 
			stats: undefined, 
			descr: undefined, 
			details: undefined, 
			next: undefined, 
			reqTitle: undefined, 
			req: undefined,
			btns: undefined,
			downgradeBtn: undefined, 
			downgradePts: undefined, 
			downgradeOpt: undefined,
			upgradeBtn: undefined, 
			upgradePts: undefined, 
			upgradeOpt: undefined, 
			pos: undefined
		},
		skills: {
			order: ["f", "l1", "c1", "r1", "l2", "r2", "l3", "r3"],
			f: {
				unlocked: false,
				grid: "f",
				tier: 0,
				name: "Master Commander",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "Show your Heroes the way of a champion by leading them into battle, increasing their damage output.",
				details: [
					"Directly increase Hero Damage, Clan Ship Damage, and Summon Clan Mate damage.",
					"Also increases Tap Damage and all dependent damage sources by a reduced amount when Tap Damage from Heroes is unlocked."],
				stats: [["x# All Hero Damage"]],
				multipliers: [[1.2, 1.7, 2.3, 3.4, 5.2, 7.8, 12.7, 22.5, 39.7, 75.8, 155.8, 343.6, 811.8, 2190, 6280, 20300, 73600, 313000, 1540000, 8730000]]
			},
			l1: {
				unlocked: false,
				grid: "l1",
				prev: "f",
				tier: 0,
				name: "Spoils of War",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "Your triumphs have been rewarded with the treasure of your fallen enemies. Increases your Chesterson Gold Bonus.",
				details: [
					"Increases gold dropped from Fairy Chests, Splash Overkills, and Inactive Gold Earned.",
					"Potentially increases Perk Gold from Make it Rain and Clan Crates."],
				stats: [["x# Chesterson Gold", "+#% Chesterson Chance"]],
				multipliers: [
					[1.8, 3.3, 6.2, 12.7, 25.8, 52.7, 117.7, 286.8, 698.9, 1850, 5330, 16600, 55700, 216000, 900000, 4280000, 23100000, 149000000, 1130000000, 10100000000],
					[0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2]]
			},
			l2: {
				unlocked: false,
				grid: "l2",
				prev: "l1",
				tier: 1,
				name: "Tactical Insight",
				lvl: 0,
				cost: 2,
				max: 20,
				descr: "Your Heroes have gained a deep understanding of how to maximize their abilities in order to defeat the Titans. Increases the strength of your Unlockable Hero skills.",
				details: [
					"There are two different types of Unlockable Hero Skills: Multiplicative and Additive.",
					"Multiplicative skills are bonuses of the form x(Bonus), such all types of Damage and Gold Amount Hero Skills.",
					"Additive skills are bonuses of the form +(Bonus), such as all Chance and Mana related Hero Skills."],
				stats: [
					["+#% Hero Skills: Multiplicative", "+#% Hero Skills: Additive"],
					["+#% Hero Skills: x", "+#% Hero Skills: +"]],
				multipliers: [
					[0.002, 0.0036, 0.0055, 0.0076, 0.0099, 0.0127, 0.0158, 0.0193, 0.0234, 0.028, 0.0333, 0.0393, 0.0461, 0.0539, 0.0628, 0.073, 0.0846, 0.0978, 0.1129, 0.13],
					[0.02, 0.044, 0.07, 0.095, 0.121, 0.148, 0.176, 0.204, 0.233, 0.263, 0.293, 0.324, 0.356, 0.388, 0.421, 0.456, 0.49, 0.526, 0.563, 0.6]]
			},
			l3: {
				unlocked: false,
				grid: "l3",
				prev: "l2",
				tier: 2,
				name: "Astral Awakening",
				lvl: 0,
				cost: 3,
				max: 12,
				descr: "Your Heroes have mastered a secret technique which allows them to summon an incredible amount of power from the heavens for a short period of time.",
				details: [
					"The Astral Orb can be tapped up to 5 times per sequence, where each tap independently multiplies your All Hero Damage Bonus for 30 seconds.",
					"Finishing the sequence quickly will give you the strongest possible All Hero Damage increase from this skill.",
					"The next cooldown begins as soon as each sequence is completed."],
				stats: [
					["x# All Hero Damage Per Tap", "-#s Cooldown"],
					["x# All Hero Dmg Per Tap", null]],
				multipliers: [
					[1.3, 1.5, 1.9, 2.4, 3.3, 4.7, 7.1, 11.6, 20.5, 39, 83, 195],
					[0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
			},
			c1: {
				unlocked: false,
				grid: "c1",
				prev: "f",
				tier: 0,
				name: "Heroic Might",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "Inspire the morale of your heroes, allowing each inspired hero to deal maximum damage while War Cry is active.",
				details: [
					"Inspired heroes deal a multiple of your total Hero DPS with the base War Cry Bonus.",
					"The amount and percentage of damage dealth by Inspired Heroes can be seen in the Hero scroll list tab.",
					"This bonus damage counts as an increase in Base Hero Damage, meaning it does not suffer a penalty when converted into Tap Damage via Tap Damage From Heroes."],
				stats: [["x# War Cry Damage", "+# Inspired Hero Count"]],
				multipliers: [
					[1.5, 2, 2.8, 4.2, 6.2, 9.3, 15.1, 26.8, 47.7, 91.8, 191.5, 430.9, 1040, 2910, 8690, 29500, 113000, 513000, 2730000, 16890000],
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
			},
			r1: {
				unlocked: false,
				grid: "r1",
				prev: "f",
				tier: 0,
				name: "Aerial Assault",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "Your Clan Ship rains down explosive shells over hordes of unsuspecting Titans, unlocking the potential for ship attacks to slash through Bosses.",
				details: [
					"Clan Based Damage increases damage dealt by both your Clan Ship and summoned Clan Mates.",
					"The increase in Maximum Splash Count only applies to attacks made by your Clan Ship."],
				stats: [
					["x# Clan Based Damage", "+# Maximum Splash Count"],
					[null, "+# Max Splash Count"]],
				multipliers: [
					[1.5, 2, 2.6, 3.8, 5.4, 7.8, 12.2, 20.6, 34.8, 63.5, 124.8, 263.4, 595.3, 1530, 4210, 13000, 45200, 184000, 866000, 4680000],
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24]]
			},
			r2: {
				unlocked: false,
				grid: "r2",
				prev: "r1",
				tier: 1,
				name: "Coordinated Offensive",
				lvl: 0,
				cost: 2,
				max: 20,
				descr: "When your Clan Ship glows, tap on it to cover fire while summon a Clan Mate into battle. Your Clan Mate helps lead your heroes and increases All Hero Damage while active.",
				details: [
					"Initiating this ability causes your Clan Ship to fire a bonus attack while your Clan Mate is summoned into battle.",
					"Your Clan Mate's damage directly depends on the strength of your Clan Ship Damage."],
				stats: [
					["x# Active All Hero Damage", "-#s Cooldown"],
					["x# Active All Hero Dmg", null]],
				multipliers: [
					[1.8, 2.5, 3.9, 6, 9.3, 15.7, 28.9, 53.2, 106.6, 231.4, 543.1, 1370, 4020, 12600, 44900, 181000, 873000, 4950000, 32600000, 248000000],
					[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]]
			},
			r3: {
				unlocked: false,
				grid: "r3",
				prev: "r2",
				tier: 2,
				name: "Anchoring Shot",
				lvl: 0,
				cost: 3,
				max: 12,
				descr: "Charges Clan Ship Attacks with electrical energy, causing affected Titans to become paralyzed for a brief period of time. Stunned Titans take additional damage per attack.",
				details: [
					"Other than Lightning Strikes and Doom, all damage sources are increased by the Stun Damage Bonus when made against stunned Titans.",
					"Boss countdown timers are temporarily frozen while a Boss Titan is stunned."],
				stats: [["x# Stun Damage", "+#s Stun Duration"]],
				multipliers: [
					[3.5, 9.9, 32.2, 135.8, 728.7, 5430, 59500, 997000, 25900000, 1110000000, 85000000000, 11800000000000],
					[0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2]]
			}
		}
	},

	SORCERER: {
		name: "sorcerer",
		prev: "WARLORD",
		color: "#52b8f0",
		lvl: 0,
		container: undefined,
		nav: undefined,
		reset: undefined,
		total: undefined,
		info: {
			container: undefined, 
			name: undefined, 
			tier: undefined, 
			img: undefined, 
			sprite: undefined, 
			extra: undefined, 
			locked: undefined, 
			lvl: undefined, 
			close: undefined, 
			info: undefined, 
			stats: undefined, 
			descr: undefined, 
			details: undefined, 
			next: undefined, 
			reqTitle: undefined, 
			req: undefined,
			btns: undefined,
			downgradeBtn: undefined, 
			downgradePts: undefined, 
			downgradeOpt: undefined,
			upgradeBtn: undefined, 
			upgradePts: undefined, 
			upgradeOpt: undefined, 
			pos: undefined
		},
		skills: {
			order: ["f", "l1", "c1", "r1", "l2", "c2", "r2", "l3", "c3", "r3"],
			f: {
				unlocked: false,
				grid: "f",
				tier: 0,
				name: "Limit Break",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "The magical world resonates within you, increasing your maximum Mana Capacity and base Mana Regeneration rate.",
				details: ["Allows you to store more mana while inactive, and also increases the effectiveness of Mana siphon."],
				stats: [["+# Mana Capacity", "+# Mana Regeneration"]],
				multipliers: [
					[5, 8, 12, 19, 26, 35, 46, 62, 80, 103, 132, 168, 213, 269, 337, 421, 524, 652, 809, 1000],
					[0.1, 0.228, 0.373, 0.538, 0.727, 0.941, 1.185, 1.463, 1.779, 2.139, 2.549, 3.015, 3.546, 4.151, 4.839, 5.622, 6.514, 7.529, 8.684, 10]]
			},
			l1: {
				unlocked: false,
				grid: "l1",
				prev: "f",
				tier: 0,
				name: "Midas Ultimate",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "Midas blesses you with all of this might, increasing your ability to earn bonus gold from Titans and Fairies alike.",
				details: [
					"Drops additional gold each time from Hand of Midas is activated.",
					"The Fairy Gold multiplier acts as an additional bonus on top of the Hand of Midas effect for fairy gold drops."],
				stats: [["x# Hand of Midas Gold", "x# Fairy Gold"]],
				multipliers: [
					[1.8, 3.2, 5.8, 11.2, 21.9, 42.6, 89.8, 204.9, 467.6, 1150.3, 3044.2, 8647.5, 26300, 91300, 337000, 1410000, 6590000, 36300000, 232000000, 1720000000],
					[1.2, 1.4, 1.6, 2.1, 2.6, 3.2, 4.4, 6.3, 9.1, 14, 23, 40, 74, 155, 340, 831, 2245, 6989, 24844, 100000]]
			},
			l2: {
				unlocked: false,
				grid: "l2",
				prev: "l1",
				tier: 1,
				name: "Fairy Charm",
				lvl: 0,
				cost: 2,
				max: 10,
				descr: "Entice a deal with the faeries, increasing the chance for multiple fairies to appear instead of just one.",
				details: [
					"After an initial Fairy spawns, you have a chance to spawn an additional Fairy as given by your Multiple Fairy Chance.",
					"For each successful Multiple Fairy Spawn, your Multiple Fairy Chance is halved and used again in attempt to spawn an additional Fairy.",
					"This spawning process continues until either a Multiple Fairy Spawn roll fails, or when 5 additional Fairies have been spawned."],
				stats: [
					["+#% Multiple Fairy Chance", "-#s Spawn Cooldown"],
					["+#% Multi Fairy Chance", null]],
				multipliers: [
					[0.04, 0.16, 0.35, 0.54, 0.75, 1.03, 1.38, 1.76, 2.21, 2.75],
					[4, 8.6, 13.5, 18.8, 24.5, 30.6, 37.2, 44.2, 51.8, 60]]
			},
			l3: {
				unlocked: false,
				grid: "l3",
				prev: "l2",
				tier: 2,
				name: "Manni Mana",
				lvl: 0,
				cost: 3,
				max: 12,
				descr: "Enlightened by an old legend, you ask the mythical deity Freemana's permission to challenge a Titan with restorative magic.",
				details: [
					"Allows Manni Mana to spawn during active play.",
					"Earn the specified amount of mana each time Manni Mana is defeated.",
					"Manni Mana spawns take priority over Chesterton Spawns."],
				stats: [["+# Mana Replenished", "+#% Spawn Chance"]],
				multipliers: [
					[6, 10, 15, 22, 31, 43, 59, 80, 107, 142, 188, 248],
					[0.005, 0.0055, 0.006, 0.0065, 0.007, 0.0075, 0.008, 0.0085, 0.009, 0.01, 0.011, 0.012]]
			},
			c1: {
				unlocked: false,
				grid: "c1",
				prev: "f",
				tier: 0,
				name: "Angelic Radiance",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "Drawing energy from your surroundings, and angelic force splits the earth and sky to deal destructive damage that splashes through oncoming bosses.",
				details: [
					"Angelic Radiance must be unlocked in order for Heavenly Strike to have the potential to splash through bosses.",
					"Splash Skip reduces the remaining number of non-boss Titans per stage for purposes of calculating Splash Overkills, down to the minimum amount of 1.",
					"Splash Skip potentially increases the number of stages that Heavenly Strike can splash through when you have more than 1 non-boss spawn per stage."],
				stats: [
					["x# Heavenly Strike Damage", "+# Splash Skip"],
					["x# Heavenly Strike Dmg", null]],
				multipliers: [
					[2, 3.5, 6.1, 11.5, 21.7, 40.8, 82, 178, 384, 886, 2180, 5690, 15800, 49100, 161000, 589000, 2380000, 11000000, 58500000, 351000000],
					[0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 24, 29, 34, 40]]
			},
			c2: {
				unlocked: false,
				grid: "c2",
				prev: "c1",
				tier: 1,
				name: "Mana Siphon",
				lvl: 0,
				cost: 2,
				max: 20,
				descr: "Your sword is imbued with the ability to steal mana from Titans, speeding up mana recovery in battle.",
				details: [
					"You have a 0.5% chance to trigger Mana Siphon with each Sword Master attack.",
					"Each successful Mana Siphon roll will restore a percentage of your maximum Mana Capacity by the specified amount.",
					"Increases to your maximum Mana Capacity will also increase the mana gained from a successful Mana Siphon roll."],
				stats: [["Recover #% Mana Capacity"]],
				multipliers: [[0.0005, 0.0007, 0.0009, 0.0012, 0.0015, 0.0019, 0.0024, 0.003, 0.0036, 0.0044, 0.0053, 0.0063, 0.0075, 0.0089, 0.0106, 0.0125, 0.0148, 0.0174, 0.0205, 0.024]]
			},
			c3: {
				unlocked: false,
				grid: "c3",
				prev: "c2",
				tier: 2,
				name: "Lightning Strike",
				lvl: 0,
				cost: 3,
				max: 12,
				descr: "Harnessing the power of Zeus, you unleash a powerful bolt of lightning onto the Titans, strong enough to weaken the strongest of foes.",
				details: [
					"Weakens Titans by reducing a portion of their remaining hit points with each strike.",
					"This ability cannot directly kill a Titan, and does not receive damage bonuses from Perks or when used against Stunned Titans."],
				stats: [
					["#% Titan Health Reduction", "+#% Chance Per Tap"],
					["#% Titan HP Reduction", null]],
				multipliers: [
					[0.115, 0.15, 0.185, 0.22, 0.255, 0.29, 0.325, 0.36, 0.395, 0.43, 0.465, 0.5],
					[0.0075, 0.0087, 0.01, 0.0113, 0.0127, 0.0142, 0.0158, 0.0174, 0.0192, 0.021, 0.023, 0.025]]
			},
			r1: {
				unlocked: false,
				grid: "r1",
				prev: "f",
				tier: 0,
				name: "Phantom Vengeance",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "With greater vigor, your shadow clone seeks out Titans to demolish, slashing through them with faster and stronger attacks.",
				details: [
					"Increases your Shadow Clone attack damage and attack rate.",
					"The attack rate increase does not improve your Shadow Clone's ability to use Mana Siphon or case Lightning Strikes, when those skills are unlocked and active.",
					"Bonus Shadow Clone damage dealt to Stunned Titans is only temporary."],
				stats: [
					["x# Shadow Clone Damage", "+# Attacks Per Second"],
					["x# Shadow Clone Dmg", null]],
				multipliers: [
					[1.5, 2, 2.6, 3.7, 5.3, 7.6, 11.9, 20.2, 34.5, 64, 128.4, 278.4, 650.4, 1750, 5050, 16600, 61700, 273000, 1420000, 8610000],
					[0.1, 0.21, 0.33, 0.46, 0.59, 0.74, 0.89, 1.05, 1.22, 1.41, 1.6, 1.81, 2.03, 2.26, 2.51, 2.77, 3.05, 3.35, 3.66, 4]]
			},
			r2: {
				unlocked: false,
				grid: "r2",
				prev: "r1",
				tier: 1,
				name: "Eternal Darkness",
				lvl: 0,
				cost: 2,
				max: 20,
				descr: "Your Shadow Clone awakens from the dark, sunken place and declares complete loyalty, binding into your presence.",
				details: [
					"Your Shadow Clone damage always depends on the strongest value of relevant bonuses while active.",
					"If your damage bonuses decrease while Shadow Clone is active, its damage will not decrease.",
					"If your damage bonuses increase while Shadow Clone is active, its damage will increase accordingly."],
				stats: [
					["+#s Shadow Clone Duration", "-#s Shadow Clone Cooldown"],
					["+#s SC Duration", "-#s Shadow Clone Cd"]],
				multipliers: [
					[2, 4.5, 8.9, 13.3, 17.7, 24.1, 32.8, 41.5, 52.6, 66.2, 82.5, 101.7, 126.7, 154.9, 189.5, 231, 283.1, 346.7, 422.2, 510],
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
			},
			r3: {
				unlocked: false,
				grid: "r3",
				prev: "r2",
				tier: 2,
				name: "Dimensional Shift",
				lvl: 0,
				cost: 3,
				max: 12,
				descr: "Your Shadow Clone has gained the ability to warp time and space, increasing your active skill effectiveness and slowing the rate of Active Skill Timers.",
				details: [
					"Dimensional Shift effects only apply when Shadow Clone is active.",
					"Increases the Primary Effect of all Active Skills, including the strength of Shadow Clone itself.",
					"Increases the duration of Active Skills; this duration boost is lost when Shadow Clone ends."],
				stats: [
					["x# Primary Active Skill Effects", "x# Active Skill Duration"],
					["x# Pr. Active Skill Effects", null]],
				multipliers: [
					[1.6, 2.1, 2.9, 4.2, 6.4, 10.7, 19.6, 40, 91, 235, 700, 2425],
					[1.042, 1.087, 1.136, 1.19, 1.25, 1.316, 1.389, 1.471, 1.563, 1.667, 1.818, 2]]
			}
		}
	},

	ROGUE: {
		name: "rogue",
		prev: "SORCERER",
		color: "#5cc453",
		lvl: 0,
		container: undefined,
		nav: undefined,
		reset: undefined,
		total: undefined,
		info: {
			container: undefined, 
			name: undefined, 
			tier: undefined, 
			img: undefined, 
			sprite: undefined, 
			extra: undefined, 
			locked: undefined, 
			lvl: undefined, 
			close: undefined, 
			info: undefined, 
			stats: undefined, 
			descr: undefined, 
			details: undefined, 
			next: undefined, 
			reqTitle: undefined, 
			req: undefined, 
			btns: undefined,
			downgradeBtn: undefined, 
			downgradePts: undefined, 
			downgradeOpt: undefined,
			upgradeBtn: undefined, 
			upgradePts: undefined, 
			upgradeOpt: undefined, 
			pos: undefined
		},
		skills: {
			order: ["f", "l1", "c1", "r1", "l2", "c2", "r2"],
			f: {
				unlocked: false,
				grid: "f",
				tier: 0,
				name: "Master Thief",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "Learn the ways of the master pick-pocket and garner more gold without having to move... much.",
				details: [
					"Increases gold earned from all gold sources.",
					"An additional bonus is given to Inactive Gold earned during inactive play."],
				stats: [["x# All Gold Earned", "x# Inactive Gold Earned"]],
				multipliers: [
					[1.6, 2.8, 4.9, 9.2, 17.3, 32.6, 65.9, 142.2, 307.3, 708.6, 1740, 4550, 12600, 39300, 129000, 471000, 1900000, 8830000, 46800000, 281000000],
					[1.4, 2.1, 3.2, 5, 7.9, 12.3, 20, 33.7, 56.6, 98.2, 176, 325, 619, 1250, 2590, 5650, 13000, 32000, 84100, 235000]]
			},
			l1: {
				unlocked: false,
				grid: "l1",
				prev: "f",
				tier: 0,
				name: "Assassinate",
				lvl: 0,
				cost: 1,
				max: 20,
				descr: "By embracing your role as a stealthy assassin, you are able to deliver Deadly Strikes with greater accuracy and effectiveness.",
				details: [
					"Directly increases Sword Master Attack Damage when a successful Deadly Strike attack is made.",
					"Deadly Strike gives an averaged bonus to all Heavenly Strikes.",
					"This skill does not affect inactive play."],
				stats: [
					["x# Deadly Strike Damage", "+#% Deadly Strike Chance"],
					["x# Deadly Strike Dmg", "+#% Deadly Strike Chance"]],
				multipliers: [
					[1.6, 2.3, 3.3, 5.2, 8.2, 12.8, 21.9, 40.4, 74.5, 148.3, 317.8, 731.6, 1800, 5070, 15200, 51300, 194000, 860000, 4420000, 26100000],
					[0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2]]
			},
			l2: {
				unlocked: false,
				grid: "l2",
				prev: "l1",
				tier: 1,
				name: "Twilight's Veil",
				lvl: 0,
				cost: 2,
				max: 10,
				descr: "Moving through the darkness of night, your Pet gains the ability to strike Titans with deadly efficiency.",
				details: [
					"Includes Pet Damage in your inactive DPS total.",
					"Allows your Pet to score Deadly Critical Hits while Deadly Strike is active.",
					"The bonus damage received from Deadly Strike is reduced from the amount listed in the skill description.",
					"Lightning Burst and Flash Zip attacks receive a reduced averaged bonus from Deadly Strike."],
				stats: [
					["+#% Inactive Pet Damage", "x# Pet Deadly Strike Damage"],
					["+#% Inactive Pet Dmg", "x# Pet Deadly Strike Dmg"]],
				multipliers: [
					[0.01, 0.025, 0.084, 0.28, 0.95, 4.2, 23.4, 131, 900, 7500],
					[1, 1.4, 2.2, 3.4, 5.2, 8.5, 15, 26.5, 49.9, 100]]
			},
			c1: {
				unlocked: false,
				grid: "c1",
				prev: "f",
				tier: 0,
				name: "Silent March",
				lvl: 0,
				cost: 1,
				max: 10,
				descr: "Unlocks inactive stage advancement up to 99% of your max prestige stage.",
				details: [
					"Your ability to inactively advance stages is limited by your Inactive DPS.",
					"In Tournaments, you may only inactively advance up to the highest submitted stage for each respective tournament."],
				stats: [
					["x# Inactive Damage", "-#% Inactive Delay Per Spawn"],
					[null, "-#% Inact. Delay Per Spwn"]],
				multipliers: [
					[1, 2.1, 3.8, 7.5, 14.4, 27.2, 59, 146, 360, 1000],
					[0, 0.05, 0.1, 0.2, 0.3, 0.42, 0.54, 0.66, 0.78, 0.9]]
			},
			c2: {
				unlocked: false,
				grid: "c2",
				prev: "c1",
				tier: 1,
				name: "Ghost Ship",
				lvl: 0,
				cost: 2,
				max: 10,
				descr: "Your Clan Ship takes on a haunting form in your absence, striking fear and terror into your enemies.",
				details: [
					"Includes Clan Ship Damage in your Inactive DPS total.",
					"Allows your Clan Ship to score Deadly Critical Hits while Deadly Strike is active.",
					"The bonus damage received from Deadly Strike is reduced from the amount listed in the skill description."],
				stats: [
					["+#% Inactive Clan Ship Damage", "x# Clan Deadly Strike Damage"],
					["+#% Inactive CS Dmg", "x# Clan DS Damage"]],
				multipliers: [
					[0.01, 0.025, 0.084, 0.28, 0.95, 4.2, 23.4, 131, 900, 7500],
					[1, 1.4, 2.2, 3.4, 5.2, 8.5, 15, 26.5, 49.9, 100]]
			},
			r1: {
				unlocked: false,
				grid: "r1",
				prev: "f",
				tier: 0,
				name: "Ambush",
				lvl: 0,
				cost: 1,
				max: 10,
				descr: "Sneak up and catch groups of Titans off guard to clear out stages quicker as well as earn additional gold and mana from Titans.",
				details: [
					"Multi-Spawns count as bonus kills for that stage, but do not allow you to skip bosses.",
					"Each Multi-Spawn increases the gold drop of that Titan by 100%, including bonus gold earned by Hand of Midas.",
					"When Manni Mana spawns, each additional Multi-Spawn increases the mana drop of Manni Mana by 25%.",
					"Multi-Spawns can trigger during Inactive Play, which increases Inactive Gold earned and can potentially reduce the average number of non-boss Titans per stage."],
				stats: [["+#% Multi-Spawn Chance"]],
				multipliers: [[0.01, 0.019, 0.032, 0.051, 0.077, 0.114, 0.167, 0.242, 0.349, 0.5]]
			},
			r2: {
				unlocked: false,
				grid: "r2",
				prev: "r1",
				tier: 1,
				name: "Shadow Assassin",
				lvl: 0,
				cost: 2,
				max: 10,
				descr: "Your Shadow Clone now reflects your full range of abilities, allowing it to utilize Deadly Strike to score incredible amounts of damage.",
				details: [
					"Includes Shadow Clone Damage in your Inactive DPS total.",
					"Shadow Clone does not need to be active in order to factor into Inactive DPS before going idle.",
					"Allows your Shadow Clone to score Deadly Critical Hits while Deadly Strike is active.",
					"The bonus damage received from Deadly Strike is reduced from the amount listed in the skill description."],
				stats: [
					["+#% Inactive Clone Damage", "x# Clone Deadly Strike Damage"],
					["+#% Inactive Clone Dmg", "x# Clone DS Dmg"]],
				multipliers: [
					[0.01, 0.025, 0.084, 0.28, 0.95, 4.2, 23.4, 131, 900, 7500],
					[1, 1.4, 2.2, 3.4, 5.2, 8.5, 15, 26.5, 49.9, 100]]
			}
		}
	},

	CLANSHIP: undefined,

	CONTAINER: {
		container: undefined,

		hide: function() {
			SKILLTREE.CONTAINER.container.style.display = "none";
		},

		show: function() {
			SKILLTREE.CONTAINER.container.removeAttribute("style");
			SKILLTREE.CLANSHIP.actionReset.removeAttribute("style");
			SKILLTREE.CLANSHIP.setActionReset(SKILLTREE.ACTIONS.reset);
			SKILLTREE.CLANSHIP.setActionSettings(SKILLTREE.ACTIONS.SETTINGS);
		}
	},

	SESSION: {
		support: 0,
		media: undefined,
		limit: 0,
		used: 0,
		selected: undefined,

		update: function(limit) {
			if (limit < 0)
				limit = 0;

			SKILLTREE.SESSION.limit = limit;
			SKILLTREE.BUILD.update();

			if (limit !== 0 && limit < SKILLTREE.SESSION.used) {
				SKILLTREE.KNIGHT.reset.onclick();
				SKILLTREE.WARLORD.reset.onclick();
				SKILLTREE.SORCERER.reset.onclick();
				SKILLTREE.ROGUE.reset.onclick();
			} else {
				SKILLTREE.FUNCTION.checkLimits();
			}
		}
	},

	ACTIONS: {
		SETTINGS: {
			dialog: undefined,

			open: function() {
				let settings = SKILLTREE.ACTIONS.SETTINGS;
				let dialog = settings.dialog;

				dialog.inputs[1].style.display = "flex";
				dialog.inputs[1].children[0].onclick = settings.toggleSP;
				dialog.inputs[1].children[0].children[0].textContent = "SP Limit";
				dialog.inputs[1].children[1].addEventListener("keydown", function(e) {
					if (e.keycode === 13 || e.which === 13)
						settings.save();
				});

				if (SKILLTREE.SESSION.limit === 0) {
					dialog.inputs[1].children[1].value = "unlimted";
					if (!dialog.inputs[1].children[1].disabled)
						settings.toggleSP();
				} else {
					dialog.inputs[1].children[1].value = SKILLTREE.SESSION.limit;
					if (dialog.inputs[1].children[1].disabled)
						settings.toggleSP();
				}
			},

			toggleSP: function() {
				let dialog = SKILLTREE.ACTIONS.SETTINGS.dialog;
				if (!dialog.inputs[1].children[1].disabled) {
					dialog.inputs[1].children[1].value = "unlimited";
					dialog.inputs[1].children[1].disabled = true;
					dialog.inputs[1].children[0].children[1].style.backgroundImage = "none";
				} else {
					dialog.inputs[1].children[1].value = "1";
					dialog.inputs[1].children[1].disabled = false;
					dialog.inputs[1].children[0].children[1].removeAttribute("style");
				}
			},

			save: function() {
				let dialog = SKILLTREE.ACTIONS.SETTINGS.dialog;
				if (!dialog.update())
					return;
				let limitInt = 0;
				if (!dialog.inputs[1].children[1].disabled) {
					let limit = dialog.inputs[1].children[1].value;
					limitInt = parseInt(limit);
					if (isNaN(limitInt)) {
						dialog.errorMsg("Please enter a number for SP limit");
						return;
					}
				}

				SKILLTREE.SESSION.update(limitInt);
			},

			close: function() {
				SKILLTREE.ACTIONS.SETTINGS.dialog.inputs[1].removeAttribute("style");
			}
		},

		reset: function() {
			if (SKILLTREE.SESSION.media.matches) {
				SKILLTREE.SESSION.selected.reset.onclick();
			} else {
				SKILLTREE.KNIGHT.reset.onclick();
				SKILLTREE.WARLORD.reset.onclick();
				SKILLTREE.SORCERER.reset.onclick();
				SKILLTREE.ROGUE.reset.onclick();
			}
		},

		share: function() {
			return SKILLTREE.BUILD.create();
		}
	},

	BUILD: {
		name: undefined,
		total: undefined,
		knight: undefined,
		warlord: undefined,
		sorcerer: undefined,
		rogue: undefined,

		build: function(builds) {
			builds = builds.toLowerCase().split("-", 4);

			SKILLTREE.BUILD.buildTree(SKILLTREE.KNIGHT, builds[0]);
			if (builds.length > 1)
				SKILLTREE.BUILD.buildTree(SKILLTREE.WARLORD, builds[1]);
			else
				SKILLTREE.BUILD.buildTree(SKILLTREE.WARLORD, "");
			if (builds.length > 2)
				SKILLTREE.BUILD.buildTree(SKILLTREE.SORCERER, builds[2]);
			else
				SKILLTREE.BUILD.buildTree(SKILLTREE.SORCERER, "");
			if (builds.length === 4)
				SKILLTREE.BUILD.buildTree(SKILLTREE.ROGUE, builds[3]);
			else
				SKILLTREE.BUILD.buildTree(SKILLTREE.ROGUE, "");
		},

		buildTree: function(tree, build) {
			tree.reset.onclick();
			let skills = tree.skills;
			let order = skills.order;
			let length = order.length >= build.length ? build.length : order.length;

			if (length == 0)
				return;

			let index = 0;
			for(let i = 0; i < length; i++) {
				let point = build.charAt(i);
				if (point > '0' && point <= '9') {
					index += parseInt(point);
					continue;
				}

				let lvl = build.charCodeAt(i) - 97;

				tree.skill = skills[order[index]];
				if (lvl < 0)
					lvl = 0;
				else if (lvl > tree.skill.max)
					lvl = tree.skill.max;

				SKILLTREE.FUNCTION.setSkillLvl(tree, lvl, true);

				index++;
			}

			SKILLTREE.BUILD.updateTree(tree);
			skills.f.btn.onclick();
		},

		create: function() {
			if (SKILLTREE.SESSION.used > 0) {
				let build = SKILLTREE.BUILD.createTree(SKILLTREE.KNIGHT);
				let warlord= SKILLTREE.BUILD.createTree(SKILLTREE.WARLORD);
				let sorcerer = SKILLTREE.BUILD.createTree(SKILLTREE.SORCERER);
				let rogue = SKILLTREE.BUILD.createTree(SKILLTREE.ROGUE);

				if (rogue != "")
					build += "-" + warlord + "-" + sorcerer + "-" + rogue;
				else if (sorcerer != "")
					build += "-" + warlord + "-" + sorcerer;
				else if (warlord != "")
					build += "-" + warlord;

				return build;
			}

			return null;
		},

		createTree: function(tree) {
			if (tree.lvl === 0)
				return "";

			let skills = tree.skills;
			let order = skills.order;

			let build = "";
			let empty = 0;
			for (let i = 0; i < order.length; i++) {
				let skill = skills[order[i]];
				if (skill.lvl === 0) {
					empty++;
				} else {
					if (empty > 0) {
						build += empty;
						empty = 0;
					}
					build += String.fromCharCode(skill.lvl + 97);
				}
			}

			return build;
		},

		update: function() {
			if (SKILLTREE.SESSION.limit === 0)
				SKILLTREE.BUILD.total.textContent = SKILLTREE.SESSION.used;
			else
				SKILLTREE.BUILD.total.textContent = SKILLTREE.SESSION.used + "/" + SKILLTREE.SESSION.limit;
		},

		updateTree: function(tree) {
			SKILLTREE.BUILD.update();
			SKILLTREE.BUILD[tree.name].textContent = tree.lvl;
			tree.total.textContent = tree.lvl;
		}
	},
	INIT: {
		init: function(dom, clanship) {
			SKILLTREE.CLANSHIP = clanship;
			SKILLTREE.CONTAINER.container = dom;
			SKILLTREE.UTIL.util = clanship.util;

			SKILLTREE.INIT.initSession();
			SKILLTREE.INIT.initActions();
			SKILLTREE.INIT.initBuild(dom.children[0]);
			SKILLTREE.INIT.initNav(dom.children[1]);
			SKILLTREE.INIT.initTrees(dom.children[2]);
		},

		initSession: function() {
			SKILLTREE.SESSION.support = SKILLTREE.CLANSHIP.support;

			SKILLTREE.CLANSHIP.media.addListener(function(changed) {
				if (changed.matches) {
					SKILLTREE.KNIGHT.nav.onclick = SKILLTREE.EVENT.onTreeSelect(SKILLTREE.KNIGHT);
					SKILLTREE.WARLORD.nav.onclick = SKILLTREE.EVENT.onTreeSelect(SKILLTREE.WARLORD);
					SKILLTREE.SORCERER.nav.onclick = SKILLTREE.EVENT.onTreeSelect(SKILLTREE.SORCERER);
					SKILLTREE.ROGUE.nav.onclick = SKILLTREE.EVENT.onTreeSelect(SKILLTREE.ROGUE);

					SKILLTREE.KNIGHT.nav.onclick();
				} else {
					SKILLTREE.KNIGHT.nav.onclick = null;
					SKILLTREE.KNIGHT.nav.removeAttribute("style");
					SKILLTREE.KNIGHT.container.removeAttribute("style");
					SKILLTREE.WARLORD.nav.onclick = null;
					SKILLTREE.WARLORD.nav.removeAttribute("style");
					SKILLTREE.WARLORD.container.removeAttribute("style");
					SKILLTREE.SORCERER.nav.onclick = null;
					SKILLTREE.SORCERER.nav.removeAttribute("style");
					SKILLTREE.SORCERER.container.removeAttribute("style");
					SKILLTREE.ROGUE.nav.onclick = null;
					SKILLTREE.ROGUE.nav.removeAttribute("style");
					SKILLTREE.ROGUE.container.removeAttribute("style");
					SKILLTREE.SESSION.selected.nav.classList.remove("tree-selected");
					SKILLTREE.SESSION.selected.nav.classList.add("tree-section");
					SKILLTREE.SESSION.selected = undefined;
				}
			});

			SKILLTREE.SESSION.media = SKILLTREE.CLANSHIP.media;
		},

		initActions: function() {
			SKILLTREE.ACTIONS.SETTINGS.dialog = SKILLTREE.CLANSHIP.dialog;
			SKILLTREE.CLANSHIP.setActionReset(SKILLTREE.ACTIONS.reset);
			SKILLTREE.CLANSHIP.setActionSettings(SKILLTREE.ACTIONS.SETTINGS);
		},

		initBuild: function(dom) {
			SKILLTREE.BUILD.total = dom.children[0];
			SKILLTREE.BUILD.knight = dom.children[1];
			SKILLTREE.BUILD.warlord = dom.children[2];
			SKILLTREE.BUILD.sorcerer = dom.children[3];
			SKILLTREE.BUILD.rogue = dom.children[4];
		},

		initNav: function(dom) {
			SKILLTREE.INIT.initSection(SKILLTREE.KNIGHT, dom.children[0]);
			SKILLTREE.INIT.initSection(SKILLTREE.WARLORD, dom.children[1]);
			SKILLTREE.INIT.initSection(SKILLTREE.SORCERER, dom.children[2]);
			SKILLTREE.INIT.initSection(SKILLTREE.ROGUE, dom.children[3]);
		},

		initSection: function(tree, dom) {
			tree.nav = dom;
			tree.reset = dom.children[1];
			tree.reset.onclick = SKILLTREE.EVENT.onResetTree(tree);

			if (SKILLTREE.SESSION.media.matches)
				tree.nav.onclick = SKILLTREE.EVENT.onTreeSelect(tree);
		},

		initTrees: function(dom) {
			SKILLTREE.INIT.initTree(SKILLTREE.KNIGHT, dom.children[0]);
			SKILLTREE.INIT.initTree(SKILLTREE.WARLORD, dom.children[1]);
			SKILLTREE.INIT.initTree(SKILLTREE.SORCERER, dom.children[2]);
			SKILLTREE.INIT.initTree(SKILLTREE.ROGUE, dom.children[3]);

			if (SKILLTREE.SESSION.media.matches)
				SKILLTREE.KNIGHT.nav.onclick();
		},

		initTree: function(tree, dom) {
			tree.container = dom;
			tree.total = dom.querySelector(".tree-lvl").children[0];
			SKILLTREE.INIT.initInfo(tree, dom.querySelector(".skill"));

			let skills = dom.querySelectorAll(".tree-skill");

			for (let i = 0; i < skills.length; i++)
				SKILLTREE.INIT.initSkill(tree, skills[i]);
		},

		initInfo: function(tree, dom) {
			let info = tree.info;

			info.container = dom;
			info.name = dom.querySelector(".skill-name");
			info.tier = dom.querySelector(".skill-tier");

			info.img = dom.querySelector(".skill-img");
			info.sprite = info.img.children[0];
			if (SKILLTREE.SESSION.support >= 1) {
				info.img.onclick = SKILLTREE.EVENT.onDetailsToggle(tree);
			} else {
				info.img.style.cursor = "default";
				info.sprite.style.display = "none";
			}

			info.extra = dom.querySelector(".skill-extra");
			info.locked = info.extra.children[0];
			info.lvl = info.extra.children[1];

			info.close = dom.querySelector(".skill-close");
			info.close.onclick = SKILLTREE.EVENT.onDetailsClose(tree);

			info.info = dom.querySelector(".skill-info");
			info.stats = info.info.children[0];
			info.descr = info.info.children[1];
			info.details = info.info.children[2];

			info.next = dom.querySelector(".skill-next");
			info.reqTitle = info.next.children[0];
			info.req = info.next.children[1];
		 
			info.btns = dom.querySelector(".skill-btns");

			info.downgradeBtn = info.btns.children[0];
			info.downgradeBtn.onclick = function() { SKILLTREE.FUNCTION.setSkillLvl(tree, -1, false); };
			info.downgradePts = info.downgradeBtn.children[1];
			info.downgradeOpt = info.downgradeBtn.children[2];

			info.upgradeBtn = info.btns.children[1];
			info.upgradeBtn.onclick = function() { SKILLTREE.FUNCTION.setSkillLvl(tree, 1, false); };
			info.upgradePts = info.upgradeBtn.children[1];
			info.upgradeOpt = info.upgradeBtn.children[2];
		},

		initSkill: function(tree, btn) {
			let grid = btn.dataset.grid;
			let skill = tree.skills[grid];

			skill.btn = btn;
			skill.pos = getComputedStyle(btn).getPropertyValue("background-position");
			skill.shade = btn.querySelector(".tree-skill-shade");
			skill.span = btn.querySelector(".tree-skill-lvl");
			skill.up = btn.querySelector(".tree-skill-up");

			btn.onclick = SKILLTREE.EVENT.onSkillClick(tree, skill);

			if (grid === "f") {
				SKILLTREE.FUNCTION.unlockSkill(skill);
				skill.up.style.display = "block";
				btn.onclick();
			}
		},
	},

	EVENT: {
		onResetTree: function(tree) {
			return function() {
				let f = tree.skills.f;
				f.btn.onclick();
				SKILLTREE.FUNCTION.setSkillLvl(tree, -f.lvl, false);
			};
		},

		onTreeSelect: function(tree) {
			return function() {
				let selected = SKILLTREE.SESSION.selected;
				if (selected) {
					if (selected.prev)
						SKILLTREE[selected.prev].nav.removeAttribute("style");
					SKILLTREE.SESSION.selected.nav.removeAttribute("style");
					SKILLTREE.SESSION.selected.nav.classList.remove("tree-selected");
					SKILLTREE.SESSION.selected.nav.classList.add("tree-section");
					SKILLTREE.SESSION.selected.container.removeAttribute("style");
				}

				SKILLTREE.KNIGHT.nav.style.borderBottom = "1px solid " + tree.color;
				SKILLTREE.WARLORD.nav.style.borderBottom = "1px solid " + tree.color;
				SKILLTREE.SORCERER.nav.style.borderBottom = "1px solid " + tree.color;
				SKILLTREE.ROGUE.nav.style.borderBottom = "1px solid " + tree.color;

				if (tree.prev)
					SKILLTREE[tree.prev].nav.style.borderRightWidth = 0;

				tree.nav.removeAttribute("style");
				tree.nav.classList.remove("tree-section");
				tree.nav.classList.add("tree-selected");
				tree.container.style.display = "flex";
				SKILLTREE.SESSION.selected = tree;
			};
		},

		onSkillClick: function(tree, skill) {
			return function() {
				let info = tree.info;

				info.close.onclick();

				if (tree.skill) {
					tree.skill.btn.style.removeProperty("background-color");
					tree.skill.btn.style.removeProperty("border-color");
				}

				skill.btn.style.backgroundColor = "white";
				skill.btn.style.borderColor = "white";
				tree.skill = skill;


				info.name.textContent = skill.name;
				info.img.style.backgroundPosition = skill.pos;
				info.stats.innerText = SKILLTREE.UTIL.getStats(skill, skill.lvl, false);
				info.descr.textContent = skill.descr;

				while (info.details.firstChild)
					info.details.removeChild(info.details.firstChild);

				for (let i = 0; i < skill.details.length; i++) {
					let detail = document.createElement("p");
					detail.classList.add("skill-detail");
					detail.textContent = "- " + skill.details[i];
					info.details.appendChild(detail);
				}

				switch(skill.tier) {
					case 0:
						if (skill.grid === 'f')
							info.tier.textContent = "Tier I";
						else
							info.tier.textContent = "Tier II";
						break;
					case 1:
						info.tier.textContent = "Tier III";
						break;
					case 2:
						info.tier.textContent = "Tier IV";
						break;
				}

				SKILLTREE.FUNCTION.lockLvl(info);
				SKILLTREE.FUNCTION.lockOption(info.downgradeBtn, true);
				info.upgradeOpt.textContent = "Unlock";

				if (skill.lvl !== skill.max)
					SKILLTREE.FUNCTION.setSkillPoints(info.upgradePts, skill.cost);

				if (SKILLTREE.SESSION.limit > 0 && SKILLTREE.SESSION.used + skill.cost > SKILLTREE.SESSION.limit)
					SKILLTREE.FUNCTION.lockOption(info.upgradeBtn, false);
				else
					SKILLTREE.FUNCTION.unlockOption(info, info.upgradeBtn);

				if (skill.unlocked) {
					info.upgradeBtn.removeAttribute("disabled");
					info.downgradeBtn.removeAttribute("disabled");
					info.reqTitle.textContent = "Next Upgrade";
					info.req.style.display = "block";
					info.req.children[0].style.display = "none";
					info.req.children[2].style.display = "none";
					info.req.children[3].style.display = "none";

					if (skill.lvl > 0) {
						SKILLTREE.FUNCTION.unlockLvl(info);
						info.lvl.textContent = skill.lvl;

						info.stats.innerText = SKILLTREE.UTIL.getStats(skill, skill.lvl - 1, false);

						if (skill.lvl === skill.max) {
							SKILLTREE.FUNCTION.lockOption(info.upgradeBtn);
							info.upgradePts.textContent = "";
							info.upgradeOpt.textContent = "MAX";
							info.reqTitle.textContent = "Max Level Reached";
							info.req.children[1].textContent = "";
						} else {
							info.req.children[1].innerText = SKILLTREE.UTIL.getStats(skill, skill.lvl, true);
							info.upgradeOpt.textContent = "Upgrade";
						}

						SKILLTREE.FUNCTION.unlockOption(info, info.downgradeBtn);
						SKILLTREE.FUNCTION.setSkillPoints(info.downgradePts, SKILLTREE.COSTS[skill.tier][skill.lvl - 1]);
					} else {
						info.req.children[1].textContent = "Available after unlocking";
					}
				} else {		
					info.reqTitle.textContent = "Unlock Requirements";
					info.req.style.removeProperty("display");
					info.req.children[0].style.removeProperty("display");
					info.req.children[2].style.removeProperty("display");
					info.req.children[3].style.removeProperty("display");

					info.req.children[1].textContent = tree.skills[skill.prev].name;
					info.req.children[3].children[0].textContent = SKILLTREE.REQS[skill.tier];

					if (tree.skills[skill.prev].lvl === 0)
						info.req.children[0].style.background = "none";
					else
						info.req.children[0].style.removeProperty("background");

					if (tree.lvl < SKILLTREE.REQS[skill.tier])
						info.req.children[2].style.background = "none";
					else
						info.req.children[2].style.removeProperty("background");

					SKILLTREE.FUNCTION.lockOption(info.upgradeBtn);
				}
			};
		},

		onDetailsToggle: function(tree) {
			return function() {
				if (tree.info.container.classList.contains("skill"))
					SKILLTREE.EVENT.onDetailsOpen(tree);
				else
					tree.info.close.onclick();
			};
		},

		onDetailsOpen: function(tree) {
			let info = tree.info;
			info.container.classList.remove("skill");
			info.container.classList.add("skill-2");

			info.name.classList.remove("skill-name");
			info.name.classList.add("skill-name-2");
			info.name.classList.add("color-tree");

			info.img.classList.remove("skill-img");
			info.img.classList.add("skill-img-2");

			info.sprite.style.display = "none";

			info.extra.classList.remove("skill-extra");
			info.extra.classList.add("skill-extra-2");

			info.info.classList.remove("skill-info");
			info.info.classList.add("skill-info-2");

			info.tier.style.display = "block";
			info.close.style.display = "block";
			info.details.style.display = "block";
			info.next.style.display = "none";
			info.btns.style.display = "none";

			info.stats.style.paddingBottom = "0.75rem";
			info.stats.style.fontSize = "1em";

			info.lvl.style.display = "none";
			if (tree.skill.lvl !== 0) 
				info.locked.textContent = "Level " + tree.skill.lvl + " / " + tree.skill.max;
		},

		onDetailsClose: function(tree) {
			return function() {
				let info = tree.info;
				info.container.classList.remove("skill-2");
				info.container.classList.add("skill");

				info.name.classList.remove("skill-name-2");
				info.name.classList.add("skill-name");
				info.name.classList.remove("color-tree");

				info.img.classList.remove("skill-img-2");
				info.img.classList.add("skill-img");

				info.sprite.removeAttribute("style");

				info.extra.classList.remove("skill-extra-2");
				info.extra.classList.add("skill-extra");

				info.info.classList.remove("skill-info-2");
				info.info.classList.add("skill-info");

				info.tier.removeAttribute("style");
				info.close.removeAttribute("style");
				info.stats.removeAttribute("style");
				info.details.removeAttribute("style");
				info.next.removeAttribute("style");
				info.btns.removeAttribute("style");

				if (tree.skill && tree.skill.lvl !== 0) {
					info.locked.textContent = "Lv. ";
					info.lvl.removeAttribute("style");
				}
			};
		}
	},

	FUNCTION: {
		setSkillLvl: function(tree, lvls, build) {
			let info = tree.info;
			let skill = tree.skill;

			if (!skill.unlocked)
				return;

			if (lvls > 0 && SKILLTREE.SESSION.limit > 0 && SKILLTREE.SESSION.used + skill.cost > SKILLTREE.SESSION.limit)
				return;

			if (skill.lvl + lvls > skill.max || skill.lvl + lvls < 0 || lvls === 0)
				return;

			let upgrade = lvls > 0;
			let lvl = skill.lvl + lvls;

			SKILLTREE.FUNCTION.calculateLevelChanges(tree, skill, lvl, build);

			skill.span.textContent = skill.lvl;

			if (lvl === skill.max) {
				skill.up.removeAttribute("style");
				skill.shade.style.display = "none";
			} else if (lvl > 0) {
				skill.up.style.display = "block";
				skill.shade.style.display = "none";
			} else {
				skill.shade.style.removeProperty("display");
				skill.span.textContent = "";
			}

			if (!build) {
				info.lvl.textContent = lvl;
				info.reqTitle.textContent = "Next Upgrade";

				SKILLTREE.FUNCTION.unlockOption(info, info.upgradeBtn);
				info.upgradeOpt.textContent = "Upgrade";
			
				SKILLTREE.FUNCTION.setSkillPoints(info.downgradePts, SKILLTREE.COSTS[skill.tier][lvl - 1]);
				SKILLTREE.FUNCTION.setSkillPoints(info.upgradePts, skill.cost);

				if (lvl !== 0) {
					info.stats.innerText = SKILLTREE.UTIL.getStats(skill, lvl - 1, false);
					info.req.children[1].innerText = SKILLTREE.UTIL.getStats(skill, lvl, true);
				} else {
					info.stats.innerText = SKILLTREE.UTIL.getStats(skill, 0, false);
				}

				if (lvl === skill.max) {
					SKILLTREE.FUNCTION.lockOption(info.upgradeBtn);
					info.upgradePts.textContent = "";
					info.upgradeOpt.textContent = "MAX";
					info.reqTitle.textContent = "Max Level Reached";
					info.req.children[1].textContent = "";			
				} else if (lvl > 0) {
					SKILLTREE.FUNCTION.unlockLvl(info);
					SKILLTREE.FUNCTION.unlockOption(info, info.downgradeBtn);
					info.upgradeOpt.textContent = "Upgrade";
				} else if (skill.lvl === 0) {
					SKILLTREE.FUNCTION.lockLvl(info);
					SKILLTREE.FUNCTION.lockOption(info.downgradeBtn, true);
					info.upgradeOpt.textContent = "Unlock";
					info.req.children[1].textContent = "Available after unlocking";
				}
			}

			if (upgrade)
				SKILLTREE.FUNCTION.checkUnlocks(tree);
			else
				SKILLTREE.FUNCTION.checkLocks(tree);

			SKILLTREE.FUNCTION.checkLimits();
		},

		calculateLevelChanges: function(tree, skill, lvl, build) {
			if (skill.lvl === lvl)
				return;

			let totals = SKILLTREE.COSTS_TOTAL[skill.tier];

			SKILLTREE.SESSION.used -= tree.lvl;

			if (skill.lvl === 0)
				tree.lvl += totals[lvl -1];
			else if (lvl > skill.lvl)
				tree.lvl += totals[lvl - 1] - totals[skill.lvl - 1];
			else if (lvl === 0)
				tree.lvl -= totals[skill.lvl - 1];
			else
				tree.lvl -= totals[skill.lvl - 1] - totals[lvl - 1];
			SKILLTREE.SESSION.used += tree.lvl;

			skill.lvl = lvl;
			skill.cost = SKILLTREE.COSTS[skill.tier][lvl];

			if (!build)
				SKILLTREE.BUILD.updateTree(tree);
		},

		checkLimits: function() {
			SKILLTREE.FUNCTION.checkLimit(SKILLTREE.KNIGHT);
			SKILLTREE.FUNCTION.checkLimit(SKILLTREE.WARLORD);
			SKILLTREE.FUNCTION.checkLimit(SKILLTREE.SORCERER);
			SKILLTREE.FUNCTION.checkLimit(SKILLTREE.ROGUE);
		},

		checkLimit: function(tree) {
			let skills = tree.skills;
			let order = skills.order;
			let limit = SKILLTREE.SESSION.limit;
			let used = SKILLTREE.SESSION.used;

			if (tree.skill.unlocked) {
				if (limit > 0 && used + tree.skill.cost > limit)
					SKILLTREE.FUNCTION.lockOption(tree.info.upgradeBtn, false);
				else if (tree.skill.lvl !== tree.skill.max)
					SKILLTREE.FUNCTION.unlockOption(tree.info, tree.info.upgradeBtn);
			}

			for (let i = 0; i < order.length; i++) {
				let skill = skills[order[i]];
				if (limit > 0 && used + skill.cost > limit)
					SKILLTREE.FUNCTION.lockLimit(skill);
				else if (skill.lvl !== skill.max)
					SKILLTREE.FUNCTION.unlockLimit(skill);
			}
		},

		checkLocks: function(tree) {
			let skills = tree.skills;
			let lvl = SKILLTREE.UTIL.addLevelRequirement(skills.f);

			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.l1);
			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.c1);
			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.r1);

			lvl += SKILLTREE.UTIL.addLevelRequirement(skills.l1);
			lvl += SKILLTREE.UTIL.addLevelRequirement(skills.c1);
			lvl += SKILLTREE.UTIL.addLevelRequirement(skills.r1);

			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.l2);
			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.c2);
			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.r2);

			lvl += SKILLTREE.UTIL.addLevelRequirement(skills.l2);
			lvl += SKILLTREE.UTIL.addLevelRequirement(skills.c2);
			lvl += SKILLTREE.UTIL.addLevelRequirement(skills.r2);
			
			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.l3);
			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.c3);
			SKILLTREE.FUNCTION.checkLock(tree, lvl, skills.r3);
		},

		checkLock: function(tree, lvl, skill) {
			if (!skill)
				return;
			
			if (lvl < SKILLTREE.REQS[skill.tier])
				SKILLTREE.FUNCTION.lockSkill(tree, skill);
			else if (skill.prev && tree.skills[skill.prev].lvl === 0)
				SKILLTREE.FUNCTION.lockSkill(tree, skill);
		},

		checkUnlocks: function(tree) {
			let skills = tree.skills;
			let order = skills.order;
			for (let i = 0; i < order.length; i++) {
				let skill = skills[order[i]];
				if (order[i] !== "f") {
					if (!skill.unlocked && tree.lvl >= SKILLTREE.REQS[skill.tier] && skills[skill.prev].lvl > 0)
						SKILLTREE.FUNCTION.unlockSkill(skill);
				}
			}
		},

		lockOption: function(btn, downgrade) {
			btn.disabled = "true";

			let bg = btn.children[0];
			bg.style.removeProperty("background-position");
			bg.classList.remove("skill-unlocked");
			bg.classList.add("skill-locked");
			

			if (downgrade)
				btn.style.display = "none";
		},

		unlockOption: function(info, btn) {
			btn.removeAttribute("disabled");

			let bg = btn.children[0];
			bg.style.removeProperty("display");
			bg.classList.remove("skill-locked");
			bg.classList.add("skill-unlocked");

			btn.removeAttribute("style");
		},

		lockLvl: function(info) {
			info.locked.classList.add("color-secondary");
			info.locked.textContent = "Locked";
			info.lvl.style.display = "none";
		},

		unlockLvl: function(info) {
			info.locked.classList.remove("color-secondary");
			info.locked.textContent = "Lv. ";
			info.lvl.removeAttribute("style");

		},

		lockSkill: function(tree, skill) {
			if (!skill)
				return;
			if (!skill.unlocked)
				return;

			skill.shade.classList.remove("tree-skill-img-animate");
			skill.shade.removeAttribute("style");
			skill.span.textContent = "";
			skill.up.removeAttribute("style");
			skill.unlocked = false;

			SKILLTREE.FUNCTION.calculateLevelChanges(tree, skill, 0, false);
		},

		unlockSkill: function(skill) {
			if (skill.unlocked)
				return;

			skill.shade.classList.add("tree-skill-img-animate");
			skill.up.style.display = "block";
			skill.unlocked = true;
		},

		lockLimit: function(skill) {
			if (!skill.unlocked)
				return;

			skill.shade.classList.remove("tree-skill-img-animate");
			skill.up.removeAttribute("style");
			if (skill.lvl === 0)
				skill.shade.removeAttribute("style");
		},

		unlockLimit: function(skill) {
			if (!skill.unlocked)
				return;

			skill.shade.classList.add("tree-skill-img-animate");
			skill.up.style.display = "block";
		},

		setSkillPoints: function(pts, cost) {
			pts.textContent = cost + " Skill Point";
			if (cost > 1)
				pts.textContent += "s";
		}
	},

	UTIL: {
		util: undefined,

		getStats: function(skill, lvl, short) {
			let stats = "";

			for (let i = 0; i < skill.stats[0].length; i++) {
				let multiplier = skill.multipliers[i][lvl];
				
				let stat = skill.stats[0][i];
				if (short && skill.stats.length === 2 && skill.stats[1][i])
					stat = skill.stats[1][i];

				if (stat.indexOf("%") > -1)
					multiplier *= 100;

				if (multiplier !== 0) {
					if (i !== 0)
						stats +="\r\n";
					multiplier = SKILLTREE.UTIL.util.convertToLetterNotation(multiplier);
					stats += stat.replace("#", multiplier);
				}
			}

			return stats;
		},

		addLevelRequirement: function(skill) {
			if (skill && skill.lvl > 0)
				return SKILLTREE.COSTS_TOTAL[skill.tier][skill.lvl - 1];
			return 0;
		}
	}
};

class SkillTree {
	constructor(dom, clanship, builds = null) {
		SKILLTREE.INIT.init(dom, clanship);
		if (builds)
			SKILLTREE.BUILD.build(builds);
	}

	get actions() {
		return SKILLTREE.ACTIONS;
	}

	hide() {
		SKILLTREE.CONTAINER.hide();
	}

	show() {
		SKILLTREE.CONTAINER.show();
	}

	build(build) {
		SKILLTREE.BUILD.build(build);
	}
}