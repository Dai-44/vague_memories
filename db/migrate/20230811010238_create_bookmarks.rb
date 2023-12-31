class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.references :user, foreign_key: true
      t.references :post, foreign_key: true

      t.index [:user_id, :post_id], unique: true
      t.timestamps
    end
  end
end
