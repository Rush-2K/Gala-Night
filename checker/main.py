import pandas as pd

file_path = "D:/Gala-Night/checker/files/ICT-GN-2024.xlsx"

# to check duplicate staff id
def duplicate_id():
    try:
        df = pd.read_excel(file_path);
        # staff_id = df["Staff ID"];
        # print(staff_id.head());
        # for index, row in df.iterrows():
        #     if row['Staff ID'] == 10103689:
        #         print('found!');
    
        # Check for duplicates in 'Staff ID' column
        duplicates = df[df.duplicated(subset='Staff ID', keep=False)];

        # Save to Excel with multiple sheets
        with pd.ExcelWriter('LIST_OF_DUPLICATES.xlsx') as writer:
            df.to_excel(writer, sheet_name='Original Data', index=False)  # Save original data
            duplicates.to_excel(writer, sheet_name='Duplicates', index=False)  # Save duplicates
        

        # print(df);
    except Exception as e:
        # Catch and print any exceptions
        print(f'Failed to read active users: {e}')

# to check total price based on designation and spouse attendance
def total_price():
    df = pd.read_excel(file_path);
    total_price_staff = 0;
    total_price_spouse = 0;
    count = 0;

    for index, row in df.iterrows():
        if row["Select Designation"] == "Executive" or row["Select Designation"] == "Bodyshop":
            total_price_staff += 75;
            count += 1;
        if row["Accompanied by Spouse?"] == "Yes":
            total_price_spouse += 150;
            count += 1;

    print('total price for staff: ', total_price_staff);
    print('total price for spouse: ', total_price_spouse);
    print('count: ', count);

# duplicate_id();
total_price();