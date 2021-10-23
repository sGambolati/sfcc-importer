export class Category {
    ID: string;
    name: string;
    subCategories: Category[] = [];

    /**
     * AddSubCategory
     */
    public AddSubCategory(category : Category) {
        this.subCategories.push(category);
    }
}