LocalDate today = LocalDate.now();
System.out.println("올해는 " + today.getYear() + "년입니다.");
//올해는 2023년입니다.

LocalDate otherDay = today.withYear(1982);
System.out.println("올해는 " + otherDay.getYear() + "년입니다.");
//올해는 1982년입니다.