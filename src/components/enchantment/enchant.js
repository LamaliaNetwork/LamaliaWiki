// src/components/enchantment/enchant.js
import React, { useState, useMemo } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { evaluate } from "mathjs";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

import enVanillaEnchantments from "./en/vanillaEnchantments";
import enCustomEnchantments from "./en/customEnchantments";
import thVanillaEnchantments from "./th/vanillaEnchantments";
import thCustomEnchantments from "./th/customEnchantments";

const calculatePlaceholder = (placeholder, level) => {
  if (placeholder === "-") return "-";
  if (typeof placeholder === "string") {
    try {
      const expression = placeholder.replace(/%level%/g, level);
      return Number(evaluate(expression)).toFixed(2);
    } catch (error) {
      console.warn(`Failed to evaluate expression: ${expression}`, error);
      return "N/A";
    }
  } else if (typeof placeholder === "object" && placeholder !== null) {
    const result = {};
    for (const [key, value] of Object.entries(placeholder)) {
      try {
        const expression = value.replace(/%level%/g, level);
        result[key] = Number(evaluate(expression)).toFixed(2);
      } catch (error) {
        console.warn(`Failed to evaluate expression: ${expression}`, error);
        result[key] = value;
      }
    }
    return result;
  }
  return placeholder;
};

const renderDescription = (enchant, level) => {
  let desc = enchant.description;
  const placeholderValue = calculatePlaceholder(enchant.placeholder, level);
  if (placeholderValue === "-") return desc;
  if (typeof placeholderValue === "string") {
    return desc.replace("%placeholder%", placeholderValue); // ลบ % เพื่อรองรับหน่วยเช่น "blocks"
  } else if (typeof placeholderValue === "object" && placeholderValue !== null) {
    Object.entries(placeholderValue).forEach(([key, value]) => {
      desc = desc.replace(
        `%${key}%`,
        `${value}${key === "seconds" ? " seconds" : ""}` // คงเฉพาะ seconds ที่เพิ่มหน่วย
      );
    });
    return desc;
  }
  return desc;
};

const EnchantmentRow = ({ enchant }) => {
  const [level, setLevel] = useState(enchant.maxLevel);
  const description = useMemo(() => renderDescription(enchant, level), [enchant, level]);

  const handleIncreaseLevel = () => {
    if (level < enchant.maxLevel) setLevel(level + 1);
  };

  const handleDecreaseLevel = () => {
    if (level > 1) setLevel(level - 1);
  };

  return (
    <tr>
      <td>{enchant.name}</td>
      <td>{enchant.maxLevel}</td>
      <td>
        {description}
        {enchant.maxLevel > 1 && (
          <div style={{ marginTop: "8px", textAlign: "center" }}>
            <button
              onClick={handleDecreaseLevel}
              disabled={level === 1}
              aria-label={translate({ id: "enchantments.decrease_level", message: "Decrease enchantment level" })}
            >
              -
            </button>
            <span style={{ margin: "0 8px" }}>
              <Translate
                id="enchantments.level"
                description="Enchantment level label"
                values={{ level }}
              >
                {"Level {level}"}
              </Translate>
            </span>
            <button
              onClick={handleIncreaseLevel}
              disabled={level === enchant.maxLevel}
              aria-label={translate({ id: "enchantments.increase_level", message: "Increase enchantment level" })}
            >
              +
            </button>
          </div>
        )}
      </td>
      <td>{enchant.conflict.length > 0 ? enchant.conflict.join(", ") : "-"}</td>
      {/* <td>{enchant.notes || "-"}</td> */}
    </tr>
  );
};

const EnchantmentTable = ({ category, enchants }) => {
  return (
    <div>
      <Heading as="h2">
        {category.replace(/([A-Z])/g, " $1").trim()}{" "}
        <Translate id="enchantments.title" description="Enchantments title">
          Enchantments
        </Translate>
      </Heading>
      <table>
        <thead>
          <tr>
            <th>
              <Translate id="enchantments.columns.enchantment" description="Enchantment column header">
                Enchantment
              </Translate>
            </th>
            <th>
              <Translate id="enchantments.columns.max_level" description="Max Level column header">
                Max Level
              </Translate>
            </th>
            <th>
              <Translate id="enchantments.columns.description" description="Description column header">
                Description
              </Translate>
            </th>
            <th>
              <Translate id="enchantments.columns.conflicts" description="Conflicts column header">
                Conflicts
              </Translate>
            </th>
            {/* <th>
              <Translate id="enchantments.columns.notes" description="Notes column header">
                Notes
              </Translate>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {enchants.map((enchant) => (
            <EnchantmentRow key={enchant.name} enchant={enchant} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export function VanillaEnchantmentsDisplay() {
  const { i18n } = useDocusaurusContext();
  const language = i18n.currentLocale || "en";
  const vanillaEnchantments = language === "th" ? thVanillaEnchantments : enVanillaEnchantments;

  const vanillaCategories = vanillaEnchantments?.vanilla
    ? Object.keys(vanillaEnchantments.vanilla)
    : [];
  if (!vanillaCategories.length) {
    return (
      <div>
        <Translate id="enchantments.no_vanilla_enchantments" description="No vanilla enchantments message">
          No vanilla enchantments available.
        </Translate>
      </div>
    );
  }

  return (
    <div>
      <Tabs>
        {vanillaCategories.map((category) => (
          <TabItem value={category} label={category} key={category}>
            <EnchantmentTable
              category={category}
              enchants={vanillaEnchantments.vanilla[category] || []}
            />
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}

export function CustomEnchantmentsDisplay() {
  const { i18n } = useDocusaurusContext();
  const language = i18n.currentLocale || "en";
  const customEnchantments = language === "th" ? thCustomEnchantments : enCustomEnchantments;

  const customCategories = customEnchantments?.custom
    ? Object.keys(customEnchantments.custom)
    : [];
  if (!customCategories.length) {
    return (
      <div>
        <Translate id="enchantments.no_custom_enchantments" description="No custom enchantments message">
          No custom enchantments available.
        </Translate>
      </div>
    );
  }

  return (
    <div>
      <Tabs>
        {customCategories.map((category) => (
          <TabItem value={category} label={category} key={category}>
            <EnchantmentTable
              category={category}
              enchants={customEnchantments.custom[category] || []}
            />
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}