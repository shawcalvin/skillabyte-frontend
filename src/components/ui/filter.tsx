import { Select } from "./select";
import { Field, Label } from "./fieldset";
import { createContext, useContext, useEffect, useState } from "react";
import { TagLabel } from "./tag";
import { Input } from "./input";

type FilterValue = string | string[] | undefined;

type FilterContextType<T> = {
    items: T[];
    filteredItems: T[];
    setItems: React.Dispatch<React.SetStateAction<T[]>>;
    filters: Record<string, FilterValue>;
    updateFilter: (name: string, value: FilterValue) => void;
    registerFilter: <V>(name: string, filterFn: FilterCallback<T, V>) => void;
    clearFilters: () => void;
};

const FilterContext = createContext<FilterContextType<any> | undefined>(undefined);

export function useFilterContext<T>() {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilterContext must be used within a FilterProvider");
    }
    return context as FilterContextType<T>;
}

type FilterCallback<T, V> = (item: T, value: V) => boolean;

type FilterProviderProps<T> = {
    initialItems: T[];
    children: React.ReactNode;
}

export function FilterProvider<T>({ initialItems, children }: FilterProviderProps<T>) {
    const [items, setItems] = useState<T[]>(initialItems);
    const [filteredItems, setFilteredItems] = useState<T[]>(initialItems);
    const [filters, setFilters] = useState<Record<string, any>>({});
    const [filterFns, setFilterFns] = useState<Record<string, FilterCallback<T, any>>>({});

    useEffect(() => {
        let result = items;
        Object.keys(filters).forEach((key) => {
            const filterFn = filterFns[key];
            const value = filters[key];
            if (filterFn && value !== undefined) {
                result = result.filter((item) => filterFn(item, value));
            }
        });
        setFilteredItems(result);
    }, [items, filters, filterFns]);

    const updateFilter = (name: string, value: any) => {
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const registerFilter = <V,>(name: string, filterFn: FilterCallback<T, V>) => {
        setFilterFns((prev) => {
            const existingFn = prev[name];
            if (existingFn === filterFn) {
                return prev; // Avoid unnecessary updates
            }
            return { ...prev, [name]: filterFn };
        });
    };

    const clearFilters = () => {
        setFilters({});
    };

    return (
        <FilterContext.Provider
            value={{ items, filteredItems, setItems, filters, updateFilter, registerFilter, clearFilters }}
        >
            {children}
        </FilterContext.Provider>
    );
}

type FilterOption = {
    label: string;
    value: string;
};

type SelectFilterProps<T, V> = {
    label: string;
    options: FilterOption[];
    filterFn: FilterCallback<T, V>;
};

export function SelectFilter<T>({ label, options, filterFn }: SelectFilterProps<T, string | undefined>) {
    const { filters, updateFilter, registerFilter } = useFilterContext<T>();

    useEffect(() => {
        registerFilter(label, filterFn);
    }, [label, filterFn, registerFilter]);

    const value = filters[label] as string | undefined;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value === "$$ALL$$" ? undefined : e.target.value;
        updateFilter(label, val);
    };

    const handleClear = () => {
        updateFilter(label, undefined);
    };

    return (
        <Field className="w-full">
            <div className="flex justify-between items-center">
                <Label className="text-primary-blue-600 font-bold">{label}</Label>
                <span
                    className="mx-4 text-primary-blue-500 text-xs font-semibold hover:font-bold cursor-pointer"
                    onClick={() => handleClear()}
                >
                    clear
                </span>
            </div>
            <Select value={value || ""} onChange={handleChange}>
                <option value="$$ALL$$">
                    Select an option...
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </Field>
    );
}

type InputFilterProps<T, V> = {
    label: string;
    filterFn: FilterCallback<T, V>;
};

export function InputFilter<T>({ label, filterFn }: InputFilterProps<T, string | undefined>) {
    const { filters, updateFilter, registerFilter } = useFilterContext<T>();

    useEffect(() => {
        registerFilter(label, filterFn);
    }, [label, filterFn, registerFilter]);

    const value = filters[label] as string | undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value === "$$ALL$$" ? undefined : e.target.value;
        updateFilter(label, val);
    };

    const handleClear = () => {
        updateFilter(label, undefined);
    };

    return (
        <Field className="w-full">
            <div className="flex justify-between items-center">
                <Label className="text-primary-blue-600 font-bold">{label}</Label>
                <span
                    className="mx-4 text-primary-blue-500 text-xs font-semibold hover:font-bold cursor-pointer"
                    onClick={() => handleClear()}
                >
                    clear
                </span>
            </div>
            <Input value={value || ""} onChange={handleChange} />
        </Field>
    );
}

type TagFilterProps<T> = {
    label: string;
    options: FilterOption[];
    filterFn: FilterCallback<T, string[]>;
};

export function TagFilter<T>({ label, options, filterFn }: TagFilterProps<T>) {
    const { filters, updateFilter, registerFilter } = useFilterContext<T>();

    useEffect(() => {
        registerFilter(label, filterFn);
    }, [label, filterFn, registerFilter]);

    const value = (filters[label] as string[]) || [];

    const handleTagClick = (tagValue: string) => {
        const isSelected = value.includes(tagValue);
        const updatedValue = isSelected
            ? value.filter((item) => item !== tagValue)
            : [...value, tagValue];
        updateFilter(label, updatedValue);
    };

    const handleClear = () => {
        updateFilter(label, undefined);
    };

    return (
        <Field className="w-full">
            <div className="flex justify-between items-center">
                <Label className="text-primary-blue-600 font-bold">
                    {label}
                </Label>
                <span
                    className="mx-4 text-primary-blue-500 text-xs font-semibold hover:font-bold cursor-pointer"
                    onClick={() => handleClear()}
                >
                    clear
                </span>
            </div>
            <div className="flex flex-wrap gap-2">
                {options.map((option) => {
                    const isSelected = value.includes(option.value);
                    return (
                        <div
                            key={option.value}
                            onClick={() => handleTagClick(option.value)}
                            className="cursor-pointer"
                        >
                            <TagLabel color={isSelected ? "orange" : "zinc"} className="font-bold">
                                {option.label}
                            </TagLabel>
                        </div>
                    );
                })}
            </div>
        </Field>
    );
}