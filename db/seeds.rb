# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


role_member = Role.new(name: 'Member')
role_society_admin = Role.new(name: 'Society Administrator')
role_member.save!
role_society_admin.save!
40.times do
    begin
        user = User.new(
            first_name:" #{Faker::Name.first_name}",
            last_name: "#{Faker::Name.last_name}",
            email: "#{Faker::Internet.email}",
            role: Role.all.sample,
            password: "Some password", 
            encrypted_password: "Some password",
          )
        user.save!
    rescue => Exception
        retry
    end
    
end

location = ['Surrey Sports Park', 'Teaching Block', 'BB', 'Library', 'Manor Park', 'IFH']
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
times = ["12:00", "6:30", "13:30", "16:00", "18:00", "20:00", "22:00", "17:00", "9:00", "9:30"]


5.times do
    begin
        schedule = Schedule.new(day: days.sample, start_time: times.sample.to_time, end_time: times.sample.to_time)
        schedule.save!
    rescue => Exception
        retry
    end
    
end

6.times do
    begin
        society = Society.new(
            name:" #{Faker::Esport.game}",
            max_people: rand(3..30),
            location: location.sample,
            brief_description: " #{Faker::Lorem.paragraph(sentence_count: 2)} ",
            essentials: " #{Faker::Lorem.sentence(word_count: 3, supplemental: false, random_words_to_add: 4)} ",
            is_active: [true, false].sample,
            schedule: Schedule.all.sample,
            user: User.includes(:role).where('roles.name': 'Society Administrator').all.sample,
          )
        society.save!
    rescue => SQLite3::ConstraintException
        retry
    end
    
    
end